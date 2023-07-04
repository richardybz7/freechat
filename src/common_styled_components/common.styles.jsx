import styled, {css} from "styled-components";

//==================BUTTON=======================================[S]
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border: none;
  border-radius: 0.5em;
`
//===============================================================[E]
//========================LABEL==================================[S]
export const Label = styled.label`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: white;
`
//===============================================================[E]
//========================FORM===================================[S]
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`
//===============================================================[E]
//==================INPUT========================================[S]
export const Input = styled.input`
  outline: none;
  font-family: var(--font-family);
  border-radius: 0.5em;
  border: none;
  padding: 0.5em;
  font-size: 1rem;
`
//===============================================================[E]
//==================TEXTAREA=====================================[S]
export const TextArea = styled.textarea`
  outline: none;
  font-family: var(--font-family);
  border-radius: 0.5em;
`
//===============================================================[E]
//==================FIXED-SIZE CONTAINERS========================[S]
export const FlexColContainerH100VH = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
export const ContainerH100VW = styled.div`
  height: 100vw;
  box-sizing: border-box;
`
export const ContainerW100VH = styled.div`
  width: 100vh;
  box-sizing: border-box;
`
export const ContainerW100VW = styled.div`
  width: 100vw;
  box-sizing: border-box;
`
//===============================================================[E]
//==================CUSTOM PADDING CONTAINERS====================[S]
export const ContainerP05EM = styled.div`
  padding: 0.5em;
  box-sizing: border-box;
`
export const ContainerP1EM = styled.div`
  padding: 1em;
  box-sizing: border-box;
`
//===============================================================[E]
//==================CUSTOM BORDER RADIUS CONTAINERS==============[S]
export const ContainerP05EM_BR05EM = styled(ContainerP05EM)`
  border-radius: 0.5em;
`
export const ContainerP1EM_BR05EM = styled(ContainerP1EM)`
  border-radius: 0.5em;
`
//===============================================================[E]
//==================FLEX CONTAINERS==============================[S]
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
`
//===============================================================[E]
//==================JUSTIFY/ALIGN ITEMS SPACE BETWEEN============[S]
export const FlexJusSpaceBetween = styled(RowContainer)`
  justify-content: space-between;
`
export const FlexColJusSpaceBetween = styled(ColumnContainer)`
  justify-content: space-between;
`
export const FlexAlignSpaceBetween = styled(RowContainer)`
  align-items: space-between;
`
export const FlexColAlignSpaceBetween = styled(ColumnContainer)`
  align-items: space-between;
`
//===============================================================[E]
//==================COLUMN ALIGN=================================[S]
export const AlignStartColContainer = styled(ColumnContainer)`
  align-items: flex-start;
`
export const AlignCenterColContainer = styled(ColumnContainer)`
  align-items: center;
`
export const AlignEndColContainer = styled(ColumnContainer)`
  align-items: flex-end;
`
//===============================================================[E]
//==================COLUMN JUSTIFY===============================[S]
export const JustifyStartColContainer = styled(ColumnContainer)`
  justify-content: flex-start;
`
export const JustifyCenterColContainer = styled(ColumnContainer)`
  justify-content: center;
`
export const JustifyEndColContainer = styled(ColumnContainer)`
  justify-content: flex-end;
`
//===============================================================[E]
//==================ROW ALIGN====================================[S]
export const AlignStartRowContainer = styled(RowContainer)`
  align-items: flex-start;
`
export const AlignCenterRowContainer = styled(RowContainer)`
  align-items: center;
`
export const AlignEndRowContainer = styled(RowContainer)`
  align-items: flex-end;
`
//===============================================================[E]
//==================ROW JUSTIFY==================================[S]
export const JustifyStartRowContainer = styled(RowContainer)`
  justify-content: flex-start;
`
export const JustifyCenterRowContainer = styled(RowContainer)`
  justify-content: center;
`
export const JustifyEndRowContainer = styled(RowContainer)`
  justify-content: flex-end;
`
//===============================================================[E]
//==================FIX-SIZED FLEX CONTAINERS====================[S]
export const CenterAll = styled(JustifyCenterColContainer)`
  height: 100vh;
  align-items: center;
`
//===============================================================[E]
//==================CIRCLE CONTAINER=============================[S]
export const CircleContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
`
//===============================================================[E]
//==================SCROLL-Y CONTAINER===========================[S]
//  to use this container, you must add a height
export const OverflowYContainer = styled.div`
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
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
//===============================================================[E]
//==================SCROLL-X CONTAINER===========================[S]
//  to use this container, you must add a width
export const OverflowXContainer = styled.div`
  position: relative;
  overflow-x: auto;
  box-sizing: border-box;
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0.5em;
    background-color: var(--scrollbar-track-color);
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--scrollbar-thumb-color);
    border-radius: 0.5em;
  }
`
//===============================================================[E]

const Style1 = css`
  display: flex;
`

const Style2 = css`
  gap: 0.5em;
`

const Style3 = css`
  background-color: red;
`

const Style4 = css`
  padding: 0.5em;
`
export const Style5 = styled.div`
  ${Style1}
  ${Style2}
  ${Style3}
  ${Style4}
`
export const BackgroundImageSetup = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: 20px;
  width: 20px;
`