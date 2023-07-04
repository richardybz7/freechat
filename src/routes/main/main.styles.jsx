import styled from "styled-components";
import { motion } from "framer-motion";

export const MainParentContainer = styled(motion.div).attrs({
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
})`
`