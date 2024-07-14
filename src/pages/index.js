import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/auth/login/login"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Login/>
    </main>
  );
}
