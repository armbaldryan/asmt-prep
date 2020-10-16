import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardWrapper = styled(NavLink)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(44, 47, 60, 0.06),
    0 3px 10px 0 rgba(44, 47, 60, 0.09);
  padding: 23px 23px 36px;
  color: #525462;
  border: 6px solid transparent;
  overflow: visible;
  margin-bottom: 50px;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  img {
    width: 100px;
    height: 100px;
    margin-top: 35px;
  }
  div {
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  margin-top: 15px;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 0.1px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`;
