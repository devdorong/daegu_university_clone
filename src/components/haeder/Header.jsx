import React from "react";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <div className="header_top">
        <div className="top_box">
          <ul>
            <li>
              <a href="#">
                <b>캠퍼스 VR</b>
              </a>
            </li>
            <li>
              <a href="#" className="bar">
                예비대학생
              </a>
            </li>
            <li>
              <a href="#" className="bar">
                학생
              </a>
            </li>
            <li>
              <a href="#" className="bar">
                교직원
              </a>
            </li>
            <li>
              <a href="#" className="bar">
                포털시스템
              </a>
            </li>
            <li>
              <a href="#" className="top_box_a">
                로그인
              </a>
            </li>
            <li>
              <a href="#" className="top_box_lang">
                <img src="./images/header_lang.png" alt="#" />
                ENG
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header_bottom">
        <h1 className="logo">
          <img src="./images/header_logo.png" alt="#" />
        </h1>
        <ul className="header_bottom_ul">
          <li>
            <a href="">대학소개</a>
          </li>
          <li>
            <a href="">대학·대학원</a>
          </li>
          <li>
            <a href="">입학안내</a>
          </li>
          <li>
            <a href="">진로취업</a>
          </li>
          <li>
            <a href="">학사안내</a>
          </li>
          <li>
            <a href="">커뮤니티 </a>
          </li>
          <li>
            <a href="">홍보관</a>
          </li>
        </ul>
        <ul className="header_bottom_menu">
          <li>
            <a href="#">
              <span>검색</span>
              <i></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>전체 메뉴</span>
              <i></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
