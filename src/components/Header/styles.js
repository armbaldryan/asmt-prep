import styled from "styled-components";

export const HeaderBox = styled.div`
  background-color: #2c2f3c;
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 25px;
    margin-right: 15px;
    padding: 20px 0px 20px 30px;
  }
`;

export const HeaderTopText = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;

export const HeaderBottomText = styled.p`
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
`;

export const HeaderRightMenu = styled.div`
  margin-right: 80px;
  margin-left: auto;
  border-bottom: ${(props) =>
    `2px solid ${props.active ? "#30b6dd" : "#2c2f3c"}`};
  height: 63px;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      color: #3994da;
    }
  }
`;
