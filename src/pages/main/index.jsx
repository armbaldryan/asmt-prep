import React, { useState } from "react";
import Skills from "../skills";
import {
  Bg,
  BgTitle,
  BgWrapper,
  BgSubTitle,
  BgButtons,
  BgButton,
  Content,
} from "./styles";

const Main = () => {
  const [selected, setSelected] = useState("hard");

  const handleClick = (number) => setSelected(number);
  return (
    <>
      <BgWrapper>
        <Bg>
          <BgTitle>Skills matrix</BgTitle>
          <BgSubTitle>
            Choose Soft or Hard Skills and find appropriate information
          </BgSubTitle>
          <BgButtons>
            <BgButton
              selected={selected === "hard"}
              onClick={() => handleClick("hard")}
            >
              Hard Skills
            </BgButton>
            <BgButton
              selected={selected === "soft"}
              onClick={() => handleClick("soft")}
            >
              Soft Skills
            </BgButton>
          </BgButtons>
        </Bg>
      </BgWrapper>
      <Content>
        <Skills selected={selected} />
      </Content>
    </>
  );
};

export default Main;
