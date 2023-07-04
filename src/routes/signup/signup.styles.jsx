import styled from "styled-components";
import { AlignCenterColContainer, Button, CircleContainer, ColumnContainer, FlexJusSpaceBetween, Input, JustifyCenterRowContainer, Label, TextArea } from "../../common_styled_components/common.styles";
import { ApprovedSVG, CheckingSVG, NotApprovedSVG } from "../../common_styled_components/result.styles";

export const SignUpParentContainer = styled(JustifyCenterRowContainer)`
  padding: 5em 0 5em 0;
`
export const SignUpContainer = styled(AlignCenterColContainer)`
`
export const CredentialContainer = styled(ColumnContainer)`
  gap: 0.3em;
`
export const FreechatLabel = styled(Label)`
  font-weight: 400;
  font-size: 2rem;
`
export const SelfDescription = styled(TextArea)`
  max-width: 275px;
  min-width: 275px;
  width: 100%;
  min-height: 2rem;
  max-height: 5rem;
  padding: 0.5em;
  font-size: 1rem;
  border-bottom-right-radius: 0;
`
export const SignUpInput = styled(Input)`
  width: 100%;
`

export const SignUpButton = styled(Button).attrs(prop => ({
  disabled: (prop.isLoadingUserDispNames && prop.isLoadingEmail) ? 
            true : false
}))`
  margin-top: 1em;
  width: 5em;
  font-size: 1rem;
  background-color: var(--color3);
  color: white;
  transition: 0.2s ease;
  :hover{
    background-color: var(--color4);
  }
`
export const CheckingSVGSignUp = styled(CheckingSVG)`
  right: -30px;
  top: 7px;
`
export const ApprovedSVGSignUp = styled(ApprovedSVG)`
  right: -30px;
  top: 7px;
`
export const NotApprovedSVGSignUp = styled(NotApprovedSVG)`
  right: -30px;
  top: 7px;
`
export const OptionalLabel = styled(Label)`
  font-size: 0.7rem;
`
export const SelfDescLabelContainer = styled(FlexJusSpaceBetween)`
  align-items: flex-end;
`