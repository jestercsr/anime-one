import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Scans | Anime ONE",
  description: "Liser tous vos scans avec toujours plus de manga",
};

export default function ScansLayout({ children }) {
  return (
    <div className={roboto.className}>
      <ErrorBoundary fallback={<Error/>}>
      {children}
      </ErrorBoundary>
    </div>
  );
}