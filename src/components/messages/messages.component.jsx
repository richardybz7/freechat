import { MessagesOverflowContainer, MessagesParentContainer, ReceivedMessage, SentMessage, NameAndSettingsContainer } from "./messages.styles"
import { ColumnContainer, ContainerP05EM_BR05EM, RowContainer, Label } from "../../common_styled_components/common.styles"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { select_contactMessage } from "../../store/display/display.selector"
import { selectUserMessages } from "../../store/contacts/contacts.selector"

const Messages = () => {
  const dispatch = useDispatch()
  const messageStartRef = useRef()
  const selectedContact = useSelector(select_contactMessage)
  const userMessages = useSelector(selectUserMessages)
  const scroll = () => {
    messageStartRef.current.scrollIntoView({ block: 'end' })
  }
  useEffect(() => {
    scroll()
  }, [])
  useEffect(() => {
    console.log(selectedContact)
    console.log(userMessages)
  },[userMessages])
  return (
    <MessagesParentContainer>
      <NameAndSettingsContainer>
        <Label>{selectedContact.name}</Label>
        {
          // <Label>Settings</Label>
        }
      </NameAndSettingsContainer>
      <MessagesOverflowContainer>
        {
          // allChatMessages && allChatMessages.map((message, id) => 
            <div style={{alignSelf: 'flex-end'}}>
              <RowContainer style={{marginBottom: '0.5em', gap: '0.5em'}}>
                <div style={{marginLeft: '2em', border: '1px solid var(--color1)', borderRadius: '0.5em', padding: '0.5em'}}>
                  desu
                </div>
                <div style={{height: '20px', minWidth: '20px', borderRadius: '100%', backgroundColor: 'red', alignSelf: 'flex-end'}}></div>
              </RowContainer>
            </div>
          // )
        }
        <div ref={messageStartRef}></div>
      </MessagesOverflowContainer>
    </MessagesParentContainer>
  )
}

export default Messages