import Navbar from "./Navbar";
import GoBack from "./GoBack";
import Head from "./Head";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <GoBack />
    </>
  );
}
