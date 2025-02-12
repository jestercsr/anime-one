'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [signupData, setSignupData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [userProfile, setUserProfile] = useState(null)
  const router = useRouter();

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    const storedAccount = localStorage.getItem("selectedAccount");
    const storedSignupData = localStorage.getItem("signupData");
    const storedLoginData = localStorage.getItem("loginData");
    const storedUserId = localStorage.getItem("userId");
    setUserProfile(storedUserId ? parseInt(storedUserId, 10) : null);

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

    if (storedUserId) {
      setUserProfile(storedUserId);
    }
  }, []);

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
    clearSignupData();
    clearLoginData();
    setUserProfile(0);
    localStorage.removeItem("selectedProfile");
    localStorage.removeItem("selectedAccount");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("avatarId");
    localStorage.removeItem("avatarUrl");
    localStorage.removeItem("profileName");
    localStorage.removeItem("offreUser")
    localStorage.removeItem("active")
    Cookies.remove("authToken")
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
      userProfile,
      selectAccount,
      saveProfile,
      saveSignupData,
      saveUserId,
      saveLoginData,
      clearSignupData,
      clearLoginData,
      logout,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
