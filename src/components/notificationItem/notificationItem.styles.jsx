import styled, { css } from "styled-components";
import { BackgroundImageSetup, Button, FlexColAlignSpaceBetween, Label } from "../../common_styled_components/common.styles";

export const NotificationItemParentContainer = styled.div`
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1em;
  border: 3px solid white;
  padding: 0.5em 1em;
  gap: 1em;
  margin-right: 0.5em;
`
export const NotificationItemContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`
export const NotificationImageContainer = styled(BackgroundImageSetup)`
  height: 70px;
  min-width: 70px;
  ${prop => prop.image ? css`
    background-image: url(${prop.image});
  `:
  css`
    background-color: gray;
  `}
  border-radius: 100%;
`
export const NotificationLabel = styled.label`
  color: white;
`
export const AcceptButton = styled(Button)`
  background-color: var(--color7);
  color: white;
`
export const DeclineButton = styled(Button)`
  background-color: var(--color8);
  color: white;
`
export const NotificationDetailsContainer = styled(FlexColAlignSpaceBetween)`
`
export const NotificationDate = styled(Label)`
  font-size: 0.7em;
  font-style: italic;
`
export const NotificationDetail = styled(Label)`
  font-size: 0.8em;
`