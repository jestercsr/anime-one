'use client'
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [signupData, setSignupData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    const storedSignupData = localStorage.getItem("signupData");
    const storedLoginData = localStorage.getItem("loginData");
    const storedUserId = localStorage.getItem("userId");

    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }

    if (storedSignupData) {
      setSignupData(JSON.parse(storedSignupData));
    }

    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }

    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
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
  const saveUserId = (id) => {
    setUserId(id);
    localStorage.setItem("userId", id);
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
    clearSignupData();
    clearLoginData();
    localStorage.removeItem("selectedProfile");
    if (router && router.push) {
      router.push('/');
    }
  };

  return (
    <ProfileContext.Provider value={{
      selectedProfile,
      signupData,
      loginData,
      selectProfile,
      saveSignupData,
      saveLoginData,
      saveUserId,
      clearSignupData,
      clearLoginData,
      logout,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
