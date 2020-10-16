import React, { useMemo } from "react";
import Card from "../../components/Card";
import { Cards } from "./styles";
import { skills } from "../../constants/skills";

const Skills = ({ selected }) => {
  const generatedSkills = useMemo(() => {
    return skills[selected].map(({ name, image, path }) => (
      <Card name={name} image={image} path={path} key={name} />
    ));
  }, [selected]);
  return <Cards>{generatedSkills}</Cards>;
};

export default Skills;
