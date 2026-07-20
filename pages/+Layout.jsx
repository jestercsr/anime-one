import "./globals.css";

import { ProfileProvider } from "../providers/ProfileContext";
import { AvatarProvider } from "../providers/AvatarContext";

import CookiesPage from "./lib/Cookies";

export default function Layout({ children }) {
  return (
    <div className="font-roboto">
      <ProfileProvider>
        <AvatarProvider>
          {children}
          <CookiesPage />
        </AvatarProvider>
      </ProfileProvider>
    </div>
  );
}
