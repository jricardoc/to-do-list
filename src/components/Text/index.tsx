import React from "react";

import { Container } from "./styles";
import { Props } from "./types";

const Text = ({ children, color = "black", size = 14, font = 'Inter_400Regular', lineThrough = false, ...rest }: Props) => {
  return (
    <Container color={color} size={size} font={font} lineThrough={lineThrough} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
