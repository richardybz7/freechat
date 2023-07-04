import styled, { css } from "styled-components";
import { AlignCenterRowContainer, BackgroundImageSetup, Button, JustifyCenterRowContainer, Label, OverflowYContainer, RowContainer } from "../../common_styled_components/common.styles";
import { CheckingSVG } from "../../common_styled_components/result.styles";

export const UserSearchResultParentContainer = styled(OverflowYContainer)`
  position: absolute;
  top: 70px;
  width: 100%;
  background-color: var(--color1);
  z-index: 1;
  border: 3px solid white;
  border-radius: 0.5em;
  max-height: 220px;
`

export const UserInfoContainer = styled(RowContainer)`
  ${prop => prop.bg && css`
    background-image: url(${prop.bg});
  `}
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0.5em;
  width: 100%;
  height: auto;
  gap: 0.5em;
  :not(:last-child){
    border-bottom: 3px solid white;
  }
`

export const ImageContainer = styled(BackgroundImageSetup)`
  ${prop => prop.image ? css`
    background-image: url(${prop.image});
  `:
  css`
    background-color: gray;
  `}
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 100%;
  width: 50px;
  height: 50px;
`

export const GettingUserInfoAnim = styled(CheckingSVG)`
  padding: 0.2em;
`

export const UserNotFound = styled(Label)`
  padding: 1.5em 0 1.5em 0;
`

export const GettingUserInfoAnimContainer = styled(JustifyCenterRowContainer)`
  align-items: center;
  height: 70px;
`
export const SearchContactButtonContainer = styled.div`
`
export const PendingButton = styled(Button)`
  cursor: default;
  background-color: var(--color3);
  color: white;
`