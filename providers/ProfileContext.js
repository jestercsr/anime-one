'use client'
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [signupData, setSignupData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [roleProfile, setRole] = useState(null);
  const [userProfile, setUserProfile] = useState(null)
  const router = useRouter();

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    const storedAccount = localStorage.getItem("selectedAccount");
    const storedSignupData = localStorage.getItem("signupData");
    const storedLoginData = localStorage.getItem("loginData");
    const storedRoleId = localStorage.getItem("role");
    const storedUserId = localStorage.getItem("userId");

    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }

    if (storedAccount) {
      setSelectedProfile(JSON.parse(storedAccount));
    }

    if (storedSignupData) {
      setSignupData(JSON.parse(storedSignupData));
    }

    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }

    if (storedRoleId) {
      setRole(storedRoleId);
    }

    if (storedUserId) {
      setUserProfile(storedUserId);
    }
  }, []);

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  const selectAccount = (account) => {
    setSelectedAccount(account);
    localStorage.setItem("selectedAccount", JSON.stringify(account));
  };

  const saveSignupData = (data) => {
    const updatedSignupData = { ...signupData, ...data };
    setSignupData(updatedSignupData);
    localStorage.setItem("signupData", JSON.stringify(updatedSignupData));
  };

  const saveLoginData = (data) => {
    const updatedLoginData = { ...loginData, ...data };
    setLoginData(updatedLoginData);
    localStorage.setItem("loginData", JSON.stringify(updatedLoginData));
  };
  const saveRoleId = (role) => {
    setRole(role);
    localStorage.setItem("role", role);
  };

  const saveProfile = (profile) => {
    setSelectedProfile(profile)
    localStorage.setItem("selectedProfile", profile);
  }

  const saveUserId = (userId) => {
    setUserProfile(userId);
    localStorage.setItem("userId", userId);
  };

  const clearSignupData = () => {
    setSignupData({});
    localStorage.removeItem("signupData");
  };

  const clearLoginData = () => {
    setLoginData({});
    localStorage.removeItem("loginData");
  };

  const logout = () => {
    setSelectedProfile(null);
    setSelectedAccount(null)
    clearSignupData();
    clearLoginData();
    localStorage.removeItem("selectedProfile");
    localStorage.removeItem("selectedAccount");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("avatarId");
    localStorage.removeItem("avatarUrl");
    localStorage.removeItem("profileName");
    if (router && router.push) {
      router.push('/');
    }
  };

  return (
    <ProfileContext.Provider value={{
      selectedProfile,
      selectedAccount,
      signupData,
      loginData,
      roleProfile,
      userProfile,
      selectProfile,
      selectAccount,
      saveProfile,
      saveSignupData,
      saveUserId,
      saveLoginData,
      saveRoleId,
      clearSignupData,
      clearLoginData,
      logout,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
