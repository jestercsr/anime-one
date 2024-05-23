import Navbar from "@/app/accueil/ui/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Navbar className="bg-teal-900 text-white flex w-screen justify-between items-center text-2xl"/>

      {children}
    </section>
  );
}
