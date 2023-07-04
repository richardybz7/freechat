import styled from "styled-components";
import { AlignCenterColContainer, Button, ColumnContainer, Input, JustifyCenterRowContainer, Label } from "../../common_styled_components/common.styles";

export const LoginParentContainer = styled(JustifyCenterRowContainer)`
  padding: 5em 0 5em 0;
`
export const LoginContainer = styled(AlignCenterColContainer)`
  
`
export const FreechatLabel = styled(Label)`
  font-weight: 400;
  font-size: 2rem;
`

export const CredentialContainer = styled(ColumnContainer)`
  gap: 0.3em;
`
export const SignupLabel = styled(Label)`
  font-size: 0.8rem;
  margin-bottom: 2em;
`
export const ClickableText = styled(Label)`
  cursor: pointer;
  color: var(--color5);
  :hover{
    text-decoration: underline;
  }
`
export const LoginButton = styled(Button)`
  margin-top: 1em;
  margin-bottom: 0.5em;
  width: 5em;
  font-size: 1rem;
  background-color: var(--color3);
  color: white;
  transition: 0.2s ease;
  :hover{
    background-color: var(--color4);
  }
`
export const LoginInput = styled(Input)`
  width: 277px;
`