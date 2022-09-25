import React from "react";
import { Container } from "./styles";
import { DividerProps } from "./types";

const Divider = ({ color = "black" }: DividerProps) => {
  return <Container color={color} />;
};

export default Divider;
