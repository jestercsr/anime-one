//import "../globals.css";
import Topbar from "./ui/Topbar";
import Sidebar from "./ui/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className={`flex`}>
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64 lg:p-4 lg:mx-auto">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
