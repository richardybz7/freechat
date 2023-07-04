import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const dropIn = {
  hidden: {
    x: '10vw', 
    opacity: 0
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 500
    },
  },
  exit: {
    x: '5vw',
    opacity: 0
  }
}

export const ModalStyle = styled(motion.div).attrs({
  variants: dropIn,
  initial: dropIn.hidden,
  animate: dropIn.visible,
  exit: dropIn.exit
})`
  ${prop => prop.type === 'logInSignUp' && css`
    border-bottom-left-radius: 1em;
    background-color: var(--color9);
    padding-right: 1em;
  `}
  ${prop => !prop.type === 'logInSignUp' && css`
    border-radius: 1em;
    background-color: var(--color1);
  `}
  color: white;
`