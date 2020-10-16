import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { materials } from "../../constants/materials";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import {
  Bg,
  BgTitle,
  BgWrapper,
  BgSubTitle,
  Content,
  BgButton,
  AccordionHeader,
} from "./styles";
import { Link } from "react-router-dom";

const Single = (props) => {
  const [opened, setOpened] = useState(null);

  useEffect(() => {
    if (!materials[props.match.params.skill]) {
      props.history.push("/");
    }
  }, [props.match.params.skill, props.history]);

  const backClickHandler = () => props.history.push("/");

  const clickHandler = (id) => setOpened(id === opened ? null : id);

  const material = materials[props.match.params.skill];
  return material ? (
    <>
      <BgWrapper>
        <Bg>
          <BgTitle>{material.title}</BgTitle>
          <BgSubTitle>{material.subTitle}</BgSubTitle>
          <BgButton onClick={backClickHandler}>Go Back</BgButton>
        </Bg>
      </BgWrapper>
      <Content>
        {material.topics.map((topic) => {
          return (
            <>
              <AccordionHeader onClick={() => clickHandler(topic.id)}>
                <p>{topic.title}</p>
                <FontAwesomeIcon
                  icon={opened !== topic.id ? faPlus : faMinus}
                  color="#30b6dd"
                />
              </AccordionHeader>
              {opened === topic.id &&
                topic.links.map((link) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.path}
                    key={link.title}
                  >
                    {link.title}
                  </a>
                ))}
              <hr />
            </>
          );
        })}
      </Content>
    </>
  ) : null;
};

export default Single;
