import styled, { css } from "styled-components";
import { BackgroundImageSetup } from "../../common_styled_components/common.styles";

export const ContactContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  transition: 0.2s ease-out;
  :hover{
    background-color: var(--color4);
  }
`
export const Contact_ = styled(BackgroundImageSetup)`
  ${prop => prop.image ? css`
    background-image: url(${prop.image});
  `:css`
    background-image: url('https://firebasestorage.googleapis.com/v0/b/freechat-5f726.appspot.com/o/photos%2FdefaultPicture.jpg?alt=media&token=278fa04b-a424-4a42-b5a4-d9fcd3fcd9c4');
  `};
  width: 50px;
  height: 50px;
  min-height: 50px;
  border-radius: 100%;  
  position: relative;
  ::after{
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background-color: green;//temp
    border: 1px solid white;
    bottom: 0;
    right: 0;
  }
`