import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Dashboard() {
  return (
    <div>
      <div>
        <nav className="left-nav">
          <div style={{ display: "flex", gap: "15px",paddingLeft:"10px" }}>
            <DashboardIcon
              style={{
                marginTop: "5px",
                // paddingLeft:"5px"

                color: "plum",
              }}
            ></DashboardIcon>
  
            <h1 style={{ fontStyle: "inherit", color: "purple" }}>Dashboard</h1>
          </div>
          <hr />
          <div className="dashboard-icon-flex">
            <HomeIcon></HomeIcon>
            <Link className="link" to="/Dashboard/home">
              Home
            </Link>
          </div>

          <hr />
          <div className="dashboard-icon-flex">
            <LoginIcon/>
            <Link className="link" to="/Dashboard/form2">
              Registration
            </Link>
          </div>

          <hr />
          <div className="dashboard-icon-flex">
            <BookmarkIcon/>
            <Link className="link">Saved</Link>
          </div>
          <hr />
          <div className="dashboard-icon-flex">
            <NotificationsIcon/>
            <Link className="link">Notification</Link>
          </div>
          <hr />
          <div className="dashboard-icon-flex">
            <MessageIcon/>
            <Link className="link">Message</Link>
          </div>
          <hr />

          <div className="dashboard-icon-flex">
            <AddCardIcon/>
            <Link to="/Dashboard/createnews" className="link">
              Add News
            </Link>
          </div>
          <hr />

          <div onClick={()=>{
            localStorage.removeItem("token")
            window.location.reload()
          }} className="dashboard-icon-flex">
            <SettingsIcon/>
            <div className="link">Settings</div>
          </div>
          <hr />
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
