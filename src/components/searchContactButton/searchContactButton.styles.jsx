import styled from "styled-components"
import { AlignCenterRowContainer } from "../../common_styled_components/common.styles"
import { CheckingSVG } from "../../common_styled_components/result.styles"

export const ButtonLoading = styled(AlignCenterRowContainer)`
  width: 100px;
  justify-content: center;
  border: 2px solid white;
  border-radius: 0.5em;
  padding: 0.5em;
`

export const LoadingPendingContactsAnim = styled(CheckingSVG)`
  position: relative;
`