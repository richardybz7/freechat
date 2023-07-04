import styled, { keyframes } from "styled-components";
import ApprovedSVG_ from '../assets/Approved.svg'
import NotApprovedSVG_ from '../assets/NotApproved.svg'
import CheckingSVG_ from '../assets/Checking.svg'
import { BackgroundImageSetup } from "./common.styles";

const CheckingAnimation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const CheckingSVG = styled(BackgroundImageSetup)`
  position: absolute;
  background-image: url(${CheckingSVG_});
  animation: ${CheckingAnimation} 2s linear infinite;
`
export const ApprovedSVG = styled(BackgroundImageSetup)`
  position: absolute;
  background-image: url(${ApprovedSVG_});
`
export const NotApprovedSVG = styled(BackgroundImageSetup)`
  position: absolute;
  background-image: url(${NotApprovedSVG_});
`