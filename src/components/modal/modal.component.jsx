import { Label } from "../../common_styled_components/common.styles"
import Backdrop from "../backdrop/backdrop.component"
import { ModalStyle } from "./modal.styles"

const Modal = ({handleClose, textArray, type}) => {
  return (
    <Backdrop onClick={handleClose} type={type}>
      <ModalStyle onClick={e => e.stopPropagation()} type={type}>
        <ul>
        {
          Array.isArray(textArray) ? (
            textArray.map((text,index) => 
                <li key={index}><Label>{text}</Label></li>
              )
          ):(
            <li>{textArray}</li>
          )
        }
        </ul>
      </ModalStyle>
    </Backdrop>
  )
}

export default Modal