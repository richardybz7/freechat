import styled from "styled-components";
import { ContainerP05EM_BR05EM, FlexJusSpaceBetween, OverflowYContainer } from "../../common_styled_components/common.styles";
import { ColumnContainer } from "../modal2/modal.styles";

export const MessagesParentContainer = styled(ColumnContainer)`
  width: 100%;
  gap: 0;
`

export const MessagesOverflowContainer = styled(OverflowYContainer)`
  flex-grow: 1;
  height: 0px;
  width: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.5em 0 0.5em;
`
export const ReceivedMessage = styled(ContainerP05EM_BR05EM)`
  border: 1px solid var(--color1);
  align-self: flex-start;
  margin-right: 2em;
`
export const SentMessage = styled(ContainerP05EM_BR05EM)`
  border: 1px solid var(--color1);
  align-self: flex-end;
  margin-left: 2em;
`
export const NameAndSettingsContainer = styled(FlexJusSpaceBetween)`
  padding: 0.3em 0.5em 0.3em 0.5em;
  background-color: var(--color3);
`