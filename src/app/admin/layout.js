import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import Topbar from "./ui/Topbar";
import Sidebar from "./ui/Sidebar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin | Anime ONE",
  description:
    "Regarder tous vos animés en streaming avec toujours plus de manga",
};

export default function AdminLayout({ children }) {
  return (
    <div className={`flex ${roboto.className}`}>
      <ErrorBoundary fallback={<Error/>}>
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64 lg:p-4 lg:mx-auto">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
      </ErrorBoundary>
    </div>
  );
}
