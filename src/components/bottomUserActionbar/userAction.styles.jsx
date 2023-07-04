import styled from "styled-components";
import CameraSVG_ from '../../assets/Camera.svg'
import ClipSVG_ from '../../assets/Clip.svg'
import SendSVG_ from '../../assets/Send.svg' 
import { BackgroundImageSetup } from "../../common_styled_components/common.styles";

export const UserActionParentContainer = styled.div`
  padding: 0 0.5em;
  background-color: var(--color2);
  display: flex;
  align-items: center;
`
export const UserActionContainer = styled.div`
  width: 100%;
  max-width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${prop => prop.send ? 'flex-end' : 'center'};
  
`
export const UserAction_ = styled.div`
  width: ${prop => prop.send ? '30px' : '50px'};
  height: ${prop => prop.send ? '30px' : '50px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: 0.2s ease-out;
  border-radius: 100%;
  :hover{
    background-color: ${prop => prop.send ? 'var(--color6)' : 'var(--color4)'};
  }
`
export const MessageInputContainer = styled.div`
  background-color: white;
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  margin: 0.5em 0.5em;
  align-items: center;
`
export const MessageInput = styled.textarea`
  resize: none;
  width: 100%;
  max-height: 100px;
  outline: none;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border: none;
  font-size: 1rem;
  padding: 0.1em 0.5em;
  padding-right: 0;
  font-family: var(--font-family);
`
export const CameraSVG = styled(BackgroundImageSetup)`
  background-image: url(${CameraSVG_});
`
export const ClipSVG = styled(BackgroundImageSetup)`
  background-image: url(${ClipSVG_});
`
export const SendSVG = styled(BackgroundImageSetup)`
  background-image: url(${SendSVG_});
`
