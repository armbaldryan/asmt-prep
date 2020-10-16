import styled from "styled-components";
import bg from "../../assets/bg.png";

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 92px 112px;
  color: #fff;
  background: url(${bg}) no-repeat 100%,
    linear-gradient(90deg, #436ad6, #30b6dd);
  background-size: contain;
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
  line-height: 72px;
  margin-bottom: 12px;
`;

export const BgSubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
`;

export const BgButtons = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const BgButton = styled.div`
  padding: 6px 12px;
  margin-right: 6px;
  background-color: ${(props) => (props.selected ? "#fbb035" : "#f2f3f7")};
  border-radius: 15px;
  font-size: 12px;
  letter-spacing: 0.1px;
  line-height: 18px;
  color: #525462;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 1200px;
  margin: -70px auto 0;
  padding-bottom: 80px;
`;
