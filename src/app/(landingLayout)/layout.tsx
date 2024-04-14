import NavBar from "@/components/NavBar";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
