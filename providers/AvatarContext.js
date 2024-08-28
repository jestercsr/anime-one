"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarId, setAvatarId] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [profileName, setProfileName] = useState(null);

  useEffect(() => {
    const storedAvatarId = localStorage.getItem("avatarId");
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    const storedProfileName = localStorage.getItem("profileName");

    if (storedAvatarId) {
      setAvatarId(storedAvatarId);
    }

    if (storedAvatarUrl) {
      setAvatarUrl(storedAvatarUrl);
    }
    if (storedProfileName) setProfileName(storedProfileName);
  }, []);

  const saveAvatarData = (id, url, name) => {
    setAvatarId(id);
    setAvatarUrl(url);
    setProfileName(name);
    localStorage.setItem("avatarId", id);
    localStorage.setItem("avatarUrl", url);
    localStorage.setItem("profileName", name);
  };

  const clearAvatarData = () => {
    setAvatarId(null);
    setAvatarUrl(null);
    setProfileName(null);
    localStorage.removeItem("avatarId");
    localStorage.removeItem("avatarUrl");
    localStorage.removeItem("profileName");
  };

  return (
    <AvatarContext.Provider value={{ avatarId, avatarUrl, profileName, saveAvatarData, clearAvatarData }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
