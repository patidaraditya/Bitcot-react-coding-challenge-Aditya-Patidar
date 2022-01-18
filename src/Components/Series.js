import React, { useState } from "react";
import "./Style.css";
import PostData from "../utils/data.json";

import facebook from "../Assets/social/facebook-white.svg";
import instagram from "../Assets/social/instagram-white.svg";
import twitter from "../Assets/social/twitter-white.svg";
import Appstore from "../Assets/store/app-store.svg";
import playstore from "../Assets/store/play-store.svg";
import windowstore from "../Assets/store/windows-store.svg";

const Series = () => {
  const newData = [];
  const [postData, setPostData] = useState([]);
  PostData.entries.map((item, index) => {
    // console.log(index, "index");
    if (
      item.programType === "series" &&
      item.releaseYear >= 2010 &&
      index <= 21
    ) {
      newData.push(item);
    }
  });
  newData.sort((a, b) => a.title.localeCompare(b.title));
  console.log(newData, "newdata");
  // setPostData(newData);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">DEMO Streaming</h3>
        <ul className="nav-links">
          <li>
            <a className="home"> Login</a>
          </li>
          <li>
            <a className="Start">Start your free trial </a>
          </li>
        </ul>
      </nav>
      <div className="heading">
        <h2 className="title"> Popular titles</h2>
      </div>
      <div className="content">
        {newData
          ? newData.map((item, index) => {
              console.log("item", item);
              return (
                <>
                  <div className="imagebox">
                    <img src={item.images.posterArt.url} className="imagess" />
                    <p>{item.title}</p>
                  </div>
                </>
              );
            })
          : null}
      </div>

      <footer>
        <div class="footer-content">
          <h5>
            Home | Privacy Policy | Terms and Conditions | Collection Statement
            | Help | Manage Account
          </h5>
          <p>Copyright &copy;2022 DEMO Streaming All Right Reserved</p>
        </div>
        <div className="social">
          <img src={facebook} alt="" className="img-socials" />
          <img src={instagram} alt="" className="img-social" />
          <img src={twitter} alt="" className="img-social" />

          <ul className="img-store">
            <li>
              <img src={Appstore} className="imgstore" />
            </li>
            <li>
              <img src={playstore} className="imgstore" />
            </li>
            <li>
              <img src={windowstore} className="imgstores" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Series;
