import Navbar from "./Navbar";
import GoBack from "./GoBack";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <GoBack />
    </>
  );
}
