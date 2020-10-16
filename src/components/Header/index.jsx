import React from "react";
import {
  HeaderBottomText,
  HeaderBox,
  HeaderRightMenu,
  HeaderTopText,
} from "./styles";
import logo from "../../assets/logo.PNG";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <HeaderBox>
      <img src={logo} alt="" />
      <div>
        <HeaderTopText>Assessment</HeaderTopText>
        <HeaderBottomText>
          Preparation portal for javascript engineers
        </HeaderBottomText>
      </div>
      <HeaderRightMenu
        active={props.history.location.pathname === "/questions"}
      >
        <Link to="/questions">Questions</Link>
      </HeaderRightMenu>
    </HeaderBox>
  );
};

export default Header;
