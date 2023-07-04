import styled, {css} from "styled-components";
import SearchSVG_ from '../../assets/Search.svg'
import AddSVG_ from '../../assets/Add.svg'
import StyleSVG_ from '../../assets/Style.svg'
import LeftArrowHeadSVG_ from '../../assets/LeftArrowHead.svg'
import RightArrowHeadSVG_ from '../../assets/RightArrowHead.svg'
import { AlignCenterColContainer, OverflowYContainer } from "../../common_styled_components/common.styles";
import { BackgroundImageSetup } from "../../common_styled_components/common.styles";

export const LeftNavbarParentContainer = styled.div`
  position: relative;
`
export const LeftNavbarContainer = styled(AlignCenterColContainer)`
  width: 80px;
  height: 100%;
`
export const LeftNavbarContent = styled(OverflowYContainer)`
  background-color: var(--color2);
  flex-grow: ${prop => prop.top && '1'};
  height: ${prop => prop.top ? '0px' : 'auto'};
  width: 100%;
  box-sizing: border-box;
` 

export const ContactListContainer = styled.div`
  //width: 100%;
  //height: 20%;
  //height: 45vh;
  max-height: 55vh;
  overflow-y: auto;
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0.5em;
    background-color: #ECECEC;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--color3);
    border-radius: 0.3em;
  }
`

export const ActionsContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const SVGContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  transition: 0.2s ease-out;
  :hover{
    background-color: var(--color4);
  }
`
export const SearchSVG = styled(BackgroundImageSetup)`
  background-image: url(${SearchSVG_});
`
export const AddSVG = styled(BackgroundImageSetup)`
  background-image: url(${AddSVG_});
`
export const StyleSVG = styled(BackgroundImageSetup)`
  background-image: url(${StyleSVG_});
`
export const LeftArrowHeadSVG = styled(BackgroundImageSetup)`
  background-image: url(${LeftArrowHeadSVG_});
`
export const RightArrowHeadSVG = styled(BackgroundImageSetup)`
  background-image: url(${RightArrowHeadSVG_});
  width: 20px;
  height: 20px;
`

export const OpenLeftNavParentContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
`
export const OpenLeftNavContainer = styled.div`
  cursor: pointer;
  height: 50px;
  width: 25px;
  background-color: var(--color1);
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-left: none;
  z-index: 1;
  transition: 0.1s ease-in-out;
  :hover{
    background-color: var(--color4);
  }
`
