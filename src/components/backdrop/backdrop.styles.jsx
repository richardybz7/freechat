import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const BackdropStyle = styled(motion.div).attrs({
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
})`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: start;
  ${prop => prop.type === 'logInSignUp' && css`
    height: auto;
    justify-content: flex-end;
  `}
  ${prop => prop.type !== 'logInSignUp' && css`
    height: 100%;
    background-color: #000000el;
    justify-content: center;
  `}
`