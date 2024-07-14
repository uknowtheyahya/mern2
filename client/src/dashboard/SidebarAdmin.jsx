import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="/" 
        img={user?.photoURL || "default-profile-picture-url"} className="rounded-full w12 h-12 ">
          <p>{user?.displayName || "Demo User"}</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Dress            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiChartPie}>
              Manage Dress
            </Sidebar.Item>
            <Sidebar.Item href="/user" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
            <Link to='/shop'>Products</Link>
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SidebarAdmin;
