import { useDispatch } from "react-redux"
import { ContactContainer, Contact_ } from "./contact.styles"
import { SetContactMessage } from "../../store/display/display.action"
import { useEffect } from "react"

const Contact = ({contact, onClick, contactIndex}) => {
  useEffect(() => {
    contactIndex === 0 && onClick(contact)
  },[])
  return (
    <ContactContainer onClick={() => onClick(contact)}>
      <Contact_ image={contact.photoUrl}/>
    </ContactContainer>
  )
}

export default Contact