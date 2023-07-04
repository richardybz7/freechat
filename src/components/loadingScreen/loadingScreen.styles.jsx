import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingParentContainer = styled(motion.div).attrs({
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
})`
  color: white; //temp
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`