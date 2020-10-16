import styled from "styled-components";
import bg from "../../assets/welcome_header.svg";

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 92px 112px;
  color: #000;
  background: url(${bg}) top no-repeat, linear-gradient(45deg, #a5d1ff, #e0edfc);
  background-size: contain;
  text-align: center;
`;

export const BgWrapper = styled.div`
  min-height: 150px;
  background-color: #f2f3f7;
  background-size: cover;
  background-position: 50%;
  flex: 0 1 auto;
  padding-top: 60px;
`;

export const BgTitle = styled.p`
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 95px;
  margin-bottom: 12px;
  color: #021151;
`;

export const BgSubTitle = styled.p`
  font-size: 24px;
  line-height: 39px;
  color: #2c2f3c;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 960px;
  margin: -70px auto 0;
  padding: 20px 30px 80px;
  background: #fff;
  border-radius: 6px;
  hr {
    height: 1px;
    background-color: #d8dfe2;
    width: 100%;
    border: none;
  }
  a {
    color: #30b6dd;
    text-decoration: none;
    font-size: 17px;
    line-height: 30px;
    width: fit-content;
    height: fit-content;
  }
`;

export const BgButton = styled.div`
  background-color: #9bc837;
  color: #fff;
  padding: 11px 40px;
  font-weight: 600;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 30px;
  width: fit-content;
  height: fit-content;
  margin: 30px auto 0;
`;

export const AccordionHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  p {
    color: #525462;
    font-size: 18px;
    font-weight: 500;
  }
  padding: 15px 0;
  cursor: pointer;
`;
