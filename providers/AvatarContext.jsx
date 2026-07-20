import React, { createContext, useContext, useState, useEffect } from "react";

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarId, setAvatarId] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [profileName, setProfileName] = useState(null);
  const [roleProfile, setRole] = useState(null);
  const [offreUser, setOffreUser] = useState(null);
  const [activated, setActivated] = useState(null);

  useEffect(() => {
    const storedAvatarId = localStorage.getItem("avatarId");
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    const storedRoleId = localStorage.getItem("role");
    const storedProfileName = localStorage.getItem("profileName");
    const storedOffreUser = localStorage.getItem("offreUser");
    const storedActive = localStorage.getItem("active");

    if (storedAvatarId) {
      setAvatarId(storedAvatarId);
    }

    if (storedRoleId) {
      setRole(storedRoleId);
    }

    if (storedOffreUser) {
      setOffreUser(storedOffreUser);
    }

    if (storedActive) {
      setActivated(storedActive);
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

  const saveRoleId = (role) => {
    setRole(role);
    localStorage.setItem("role", role);
  };

  const saveOffreId = (offre) => {
    setOffreUser(offre);
    localStorage.setItem("offreUser", offre);
  };

  const saveActiveCompte = (activer) => {
    setActivated(activer);
    localStorage.setItem("active", activer);
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
    <AvatarContext.Provider value={{ avatarId, avatarUrl, profileName, roleProfile, offreUser, activated, saveActiveCompte, saveOffreId, saveRoleId, saveAvatarData, clearAvatarData }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
