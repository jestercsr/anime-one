import "@/globals.css";
import { ProfileProvider } from "../../providers/ProfileContext";

export default function AuthLayout({ children }) {
  return (
    <div>
      <ProfileProvider>{children}</ProfileProvider>
    </div>
  );
}
