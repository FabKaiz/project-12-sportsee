import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";

const Layout = () => {
  return (
      <>
        <Header />
        <div className="layout__content">
          <Sidebar />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </>
  );
};

export default Layout;