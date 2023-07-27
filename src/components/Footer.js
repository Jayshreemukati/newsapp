import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <div className="text">NewsBest</div>
          <div className="footerdiv1">
            Follow us on:
            <InstagramIcon className="instaicon" />
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
        </div>
        <br />
        <br />
        <hr />

        <div className="footerdiv2">
          Download App
          <div className="fdiv">
            <img
              className="fimg"
              src="data:image/png;base64,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"
              alt="PlayStore"
            />
          
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bIW9N5qsYTddM6v1o09JTeFW4JakkODTyA&usqp=CAU"
              className="fimg"
              alt="AppStore"
            />
         
            <img src="" className="" />
          </div>
          
        </div>
        <hr />

        <div className="footer3">
          <div>HOME</div>
          <div>CONTACT US</div>
          <div>TERMS AND CONDITION</div>
          <div>ARCHIVES</div>
        </div>
        <hr />

        <div className="footer4"><p>copyright 2023 Living Media India Limited.For reprint right:Syndications Today</p></div>
      </footer>
    </div>
  );
}
