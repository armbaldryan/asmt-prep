import React from "react";
import { questions } from "../../constants/questions";

import {
  Bg,
  BgTitle,
  BgWrapper,
  Content,
  BgButton,
  QuestionsHeader,
  Question,
  Symbol,
} from "./styles";

const Questions = (props) => {
  const backClickHandler = () => props.history.push("/");

  return (
    <>
      <BgWrapper>
        <Bg>
          <BgTitle>Questions</BgTitle>
          <BgButton onClick={backClickHandler}>Go Back</BgButton>
        </Bg>
      </BgWrapper>
      <Content>
        {questions.map((item) => (
          <React.Fragment key={item.title}>
            <QuestionsHeader>{item.title}</QuestionsHeader>
            {item.questions.map((subItem) => (
              <React.Fragment key={subItem.id}>
                <Question>
                  <Symbol>⬤</Symbol>
                  <span>{subItem.title}</span>
                </Question>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </Content>
    </>
  );
};

export default Questions;
