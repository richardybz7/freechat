import styled from "styled-components";
import { Label } from "../../common_styled_components/common.styles";

export const AvatarLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`
export const AvatarLogo_ = styled.div`
  cursor: pointer;
  height: 130px;
  width: 130px;
  border-radius: 100%;
  background-color: white; //temporary
  -webkit-tap-highlight-color: transparent;
  border: 5px solid transparent;
  :hover{
    border: 5px solid var(--highlight);
  }
`
export const AvatarLogoLabel = styled.label`
  font-size: 0.8rem;
  word-wrap: wrap;
  text-align: center;
  width: 150px;
  color: white;
`

export const ClickableText = styled(Label)`
  cursor: pointer;
  color: var(--color5);
  :hover{
    text-decoration: underline;
  }
`