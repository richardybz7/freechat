import { Fragment, useState } from "react"
import { ButtonContainer, CloseModalContainer, ClosePattern, ColumnContainer, ColumnParentContainer, MenuContainer, MenuParentContainer, ModalBackdrop, ModalHeaderContainer, ModalLabel, Modal_, NoNotification, NotificationContainer, SelectAvatarLogo, SelectAvatarLogoContainer, SignOutButton, SignOutButtonContainer, TextArea } from "./modal.styles"
import AvatarLogo from "../avatar-logo/avatarLogo.component"
import NotificationItem from "../notificationItem/notificationItem.component"
import { Input, Button } from "../../common_styled_components/common.styles"
import { useSelector } from "react-redux"
import UserSearchResult from "../userSearchResult/userSearchResult.component"
import { selectContacts } from "../../store/contacts/contacts.selector"
import { selectUser } from "../../store/user/user.selector"
import { selectPendingContacts } from "../../store/pendingContacts/pendingContacts.selector"
import { selectNotifications } from "../../store/notifications/notifications.selector"

const Modal = ({purpose, closeModal}) => {
  const [result, setResult] = useState('0')
  const [userDispNameInput, setUserDispNameInput] = useState(null)
  const contacts = useSelector(selectContacts)
  const user = useSelector(selectUser)
  const pendingContacts = useSelector(selectPendingContacts)
  const notifications = useSelector(selectNotifications)
  const test = () => {
    setResult('0')
  }
  const userDispNameInputOnChange = (e) => {
    setUserDispNameInput(e.target.value)
  }
  return (
    <ModalBackdrop onClick={closeModal}>
      <Modal_ onClick={e => e.stopPropagation()} p={purpose}>
        <ModalHeaderContainer>
          {
            purpose === 'avatar' &&
            <Fragment>
              <ModalLabel p={purpose}>Select an avatar</ModalLabel>
              <CloseModalContainer onClick={closeModal}>
                <ClosePattern/>
                <ClosePattern/>
              </CloseModalContainer>
            </Fragment>
          }
          {
            purpose === 'menu' &&
            <MenuParentContainer>
              <ModalLabel p={purpose}>Display name</ModalLabel>
              <MenuContainer>
                <Input 
                  purpose='displayName' 
                  placeholder={user.name}
                />
                {
                  //temp
                  //<ResultSVG purpose='menu' result={result}/>
                }
                <Button bg='color2' onClick={test}>Save</Button>
              </MenuContainer>
            </MenuParentContainer>
          }
          {
            purpose === 'add' &&
            <Fragment>
              <ModalLabel p={purpose}>Create room</ModalLabel>
              <CloseModalContainer onClick={closeModal}>
                <ClosePattern/>
                <ClosePattern/>
              </CloseModalContainer>
            </Fragment>
          }
          {
            purpose === 'search' &&
            <Fragment>
              <ModalLabel>&nbsp;</ModalLabel>
              <CloseModalContainer onClick={closeModal}>
                <ClosePattern/>
                <ClosePattern/>
              </CloseModalContainer>
            </Fragment>
          }
          {
            purpose === 'styles' &&
            <Fragment>
              <ModalLabel>Styles</ModalLabel>
              <CloseModalContainer onClick={closeModal}>
                <ClosePattern/>
                <ClosePattern/>
              </CloseModalContainer>
            </Fragment>
          }
          
        </ModalHeaderContainer>
        {
          purpose === 'menu' &&
          <SignOutButtonContainer>
            <SignOutButton bg='color1'>Sign Out</SignOutButton>
          </SignOutButtonContainer>
        }
        {
          purpose === 'avatar' &&
          <Fragment>
            <SelectAvatarLogoContainer>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
            </SelectAvatarLogoContainer>
            <ButtonContainer>
              <Button bg='color2'>Select avatar</Button>
            </ButtonContainer>
          </Fragment>
        }
        {
          purpose === 'search' &&
          <ColumnParentContainer>
            <ColumnContainer>
              <ModalLabel>Search User</ModalLabel>
              <Input onChange={e => userDispNameInputOnChange(e)}/>
              {
                userDispNameInput && 
                <UserSearchResult 
                  userDispName={userDispNameInput}
                  contacts={contacts}
                  pendingContacts={pendingContacts} 
                  user={user} 
                />
              }
            </ColumnContainer>
            {
              // <ColumnContainer>
              //   <ModalLabel>Search Room</ModalLabel>
              //   <Input/>
              // </ColumnContainer>
            }
          </ColumnParentContainer>
        }
        {
          purpose === 'add' && 
          <ColumnParentContainer>
            <AvatarLogo purpose='add'/>
            <ColumnContainer>
              <ModalLabel>Room name</ModalLabel>
              <Input/>
            </ColumnContainer>
            <ColumnContainer>
              <ModalLabel>Room description</ModalLabel>
              <TextArea/>
            </ColumnContainer>
            <Button bg='color2'>Create room</Button>
          </ColumnParentContainer>
        }
        {
          purpose === 'styles' &&
          <Fragment>
            <SelectAvatarLogoContainer>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
              <SelectAvatarLogo/>
            </SelectAvatarLogoContainer>
            <ButtonContainer>
              <Button bg='color2'>Select style</Button>
            </ButtonContainer>
          </Fragment>
        }
        {
          purpose === 'notification' &&
          <NotificationContainer>
            {
              notifications && Object.keys(notifications).length ? (
                Object.keys(notifications).map((key, i) => 
                  <NotificationItem
                    key={i}
                    notification={notifications[key]}
                    user={user}
                  />
                )
              ):(
                <NoNotification>You have no notification</NoNotification>
              )
            }
          </NotificationContainer>
        }
      </Modal_>
    </ModalBackdrop>
  )
}

export default Modal