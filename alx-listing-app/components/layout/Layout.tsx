import Header from "./Header";
import Footer from "./Footer";
import { ReactComponentProps } from "@/interface";

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;