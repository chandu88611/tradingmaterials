import { useState } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { RiUserLine, RiLogoutBoxLine, RiInboxLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

function UserMenu() {
  const router = useRouter();
  const user = useSelector((state) => state.users.user);

  const path = router.asPath;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = async () => {
    try {
      const response = await axios.post(
        "https://admin.tradingmaterials.com/api/lead/auth/logout",
        {},
        {
          headers: {
            "access-token": localStorage.getItem("tmToken"),
          },
        }
      );
  
      if (response.status) {
        localStorage.removeItem("tmToken");
        window.location.reload();
      }
    } catch (error) {

      console.error(error);
    }
  };
  return (
    <div>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
      >
       {/* {user?.profile.profile_image && <img
          src={user?.profile.profile_image}
          alt="logo-light.png"
          className="w-10 h-10 rounded-full"
        />} */}

        <FaUserCircle size="2rem" />
      </IconButton>
      <Menu
        classes={{ paper: "w-30" }}
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="py-2 px-4">
          <Link href="/dashboard/my-profile">
            
            <div
              className={`flex items-center mb-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer ${
                path.includes( "my-profile")
                  ? "text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <RiUserLine size="1.5rem" className="mr-2" />
              <Typography variant="body1">Profile</Typography>
            </div>
          </Link>
          <div className="flex items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer">
            <RiInboxLine size="1.5rem" className="mr-2 text-gray-600" />
            <Typography variant="body1" className="text-gray-600">
              Inbox
            </Typography>
          </div>
          <div
            className="flex items-center mb-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
            onClick={logOut}
          >
            <RiLogoutBoxLine size="1.5rem" className="mr-2 text-gray-600" />
            <Typography variant="body1" className="text-gray-600">
              Logout
            </Typography>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default UserMenu;
