'use client'
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }
  }, []);

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  const logout = () => {
    setSelectedProfile(null);
    localStorage.removeItem("selectedProfile");
    if (router && router.push) {
      router.push('/');
    }
  };

  return (
    <ProfileContext.Provider value={{ selectedProfile, selectProfile, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
