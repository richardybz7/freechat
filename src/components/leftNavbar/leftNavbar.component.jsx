import { useDispatch, useSelector } from "react-redux"
import Contact from "../contact/contact.components"
import { ActionsContainer, AddSVG, ContactListContainer, LeftArrowHeadSVG, LeftNavbarContainer, LeftNavbarContent, LeftNavbarParentContainer, OpenLeftNavContainer, OpenLeftNavParentContainer, RightArrowHeadSVG, SVGContainer, SearchSVG, StyleSVG } from "./leftNavbar.styles"
import { OpenAddRoom, OpenLeftNav, OpenSearch, OpenStyles, SetContactMessage } from "../../store/display/display.action"
import { select_contactMessage, select_isOpen_LeftNav } from "../../store/display/display.selector"
import { Fragment, useEffect, useRef, useState } from "react"
import { selectContacts } from "../../store/contacts/contacts.selector"
import { getUserMessagesStart } from "../../store/contacts/contacts.action"

const LeftNavbar = () => {
  const dispatch = useDispatch()
  const isLeftNavOpen = useSelector(select_isOpen_LeftNav)
  const contacts = useSelector(selectContacts)
  const [contactID, setContactID] = useState('')
  
  const closeLeftNav = () => {
    dispatch(OpenLeftNav(false))
  }
  const openLeftNavHandler = () => {
    dispatch(OpenLeftNav(true))
  }
  const searchHandler = () => {
    dispatch(OpenSearch(true))
  }
  const addRoomHandler = () => {
    dispatch(OpenAddRoom(true))
  }
  const stylesHandler = () => {
    dispatch(OpenStyles(true))
  }
  const contactOnClickHander = (contact) => {
    if(contact.contactID !== contactID){
      setContactID(contact.contactID)
      dispatch(SetContactMessage(contact))
    }
  }
  useEffect(() => {
    Object.keys(contacts).length > 0 && 
    dispatch(getUserMessagesStart(contacts))
  },[contacts])
  return (
    <LeftNavbarParentContainer>
      {
        isLeftNavOpen ? 
          <LeftNavbarContainer>
            <LeftNavbarContent top>
            {
              Object.keys(contacts).length > 0 &&
              contacts.map((contact, i) => 
                <Contact 
                  key={i}
                  contactIndex={i}
                  contact={contact}  
                  onClick={contactOnClickHander}              
                />
              )
            }
            </LeftNavbarContent>
            <LeftNavbarContent>
              <SVGContainer onClick={searchHandler}>
                <SearchSVG/>
              </SVGContainer>
              {
                // <SVGContainer onClick={addRoomHandler}>
                //   <AddSVG/>
                // </SVGContainer>
              }
              {
                // <SVGContainer onClick={stylesHandler}>
                //   <StyleSVG/>
                // </SVGContainer>
              }
              <SVGContainer onClick={closeLeftNav}>
                <LeftArrowHeadSVG/>
              </SVGContainer>
            </LeftNavbarContent>
          </LeftNavbarContainer>
          :
          <OpenLeftNavParentContainer>
            <OpenLeftNavContainer onClick={openLeftNavHandler}>
              <RightArrowHeadSVG/>
            </OpenLeftNavContainer>
          </OpenLeftNavParentContainer>
      }
    </LeftNavbarParentContainer>
  )
}

export default LeftNavbar