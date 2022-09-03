import { Outlet } from "react-router-dom";
import SidebarDoctor from "./SidebarDoctor";
import SidebarUser from "./SidebarUser";

const SidebarLayout = () => {
  return (
    <>
      <SidebarDoctor />
      <Outlet />
    </>
  );
};

export default SidebarLayout;
