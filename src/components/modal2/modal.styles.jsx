import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { Button, JustifyCenterRowContainer } from "../../common_styled_components/common.styles";

export const ModalBackdrop = styled(motion.div).attrs({
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--backdrop);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal_ = styled(motion.div).attrs({
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
})`
  padding: 1em 1.5em;
  background-color: var(--color1);
  border-radius: 0.5em;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  ${prop => prop.p === 'menu' && css`
    position: absolute;
    top: 60px;
  `}
  ${prop => prop.p === 'notification' && css`
    position: absolute;
    top: 60px;
  `}
  @media screen and (max-width: 760px){
    width: 80vw;
  }
`

export const ModalLabel = styled.label`
  color: white;
  align-self: flex-start;
  ${prop => prop.p === 'menu' && css`
    padding-left: 0.5em;
    padding-bottom: 0.5em;
  `}
`
export const SelectAvatarLogo = styled.div`
  background-color: white;
  border-radius: 100%;
  height: 65px;
  width: 65px;
  margin: 0.3em;
  border: 5px solid transparent;
  :hover{
    border: 5px solid var(--highlight);
  }
`
export const SelectAvatarLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
`
export const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7em;
`
export const CloseModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const ClosePattern = styled.div`
  position: absolute;
  width: 20px;
  height: 2px;
  right: 0;
  background-color: white;
  transform: rotate(-45deg);
  :last-child{
    transform: rotate(45deg);
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
`
export const MenuParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 760px){
    margin-right: 5em;
  }
`
export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  padding-top: 0.1em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  position: relative;
`
export const SignOutButtonContainer = styled.div`
  border-top: 3px solid white;
  padding-top: 0.5em;
`
export const SignOutButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 0.5em;
`
export const ColumnParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  gap: 0.5em;
`
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  position: relative;
`
export const TextArea = styled.textarea.attrs({
  maxLength: '160'
})`
  resize: none;
  height: 100px;
  width: 200px;
  border-radius: 0.5em;
  border: none;
  outline: none;
  padding: 0.5em;
  font-family: var(--font-family);
`
export const NotificationContainer = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  margin-bottom: 0.5em;
  overflow-y: auto;
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0.5em;
    background-color: #ECECEC;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--color3);
    border-radius: 0.3em;
  }
`
export const NoNotification = styled(JustifyCenterRowContainer)`
  color: white;
`