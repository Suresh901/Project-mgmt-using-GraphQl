// import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div className="p-2 bg-[#F8F4FF] shadow-md ">
      <div className="flex items-center gap-10 mx-10">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold">Project Management</h1>
      </div>
    </div>
  );
};

export default Header;
