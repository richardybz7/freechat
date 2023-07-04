import { useDispatch } from "react-redux"
import { Button } from "../../common_styled_components/common.styles"
import { ColumnContainer } from "../modal2/modal.styles"
import { AcceptButton, DeclineButton, NotificationDate, NotificationDetail, NotificationDetailsContainer, NotificationImageContainer, NotificationItemContainer, NotificationItemParentContainer, NotificationLabel } from "./notificationItem.styles"
import { removePendingContactsStart } from "../../store/pendingContacts/pendingContacts.action"
import { removeNotificationStart } from "../../store/notifications/notifications.action"
import { addContactsStart } from "../../store/contacts/contacts.action"

const NotificationItem = ({notification, user}) => {
  const dispatch = useDispatch()
  const acceptContactOnClickHandler = (e) => {
    e.preventDefault()
    const targetData = {
      id: notification.contactID,
      name: notification.name,
      type: 'user',
      photoUrl: notification.photoUrl
    }
    const userData = {
      id: user.id,
      name: user.name,
      type: 'user',
      photoUrl: user.photoUrl
    }
    dispatch(removePendingContactsStart(notification.contactID, user.id))
    dispatch(addContactsStart(notification.contactID, targetData, user.id, userData))
    dispatch(removeNotificationStart(notification.contactID, user.id))
  }
  const declineContactOnClickHandler = (e) => {
    e.preventDefault()
    dispatch(removePendingContactsStart(notification.contactID, user.id))
    dispatch(removeNotificationStart(notification.contactID, user.id))
  }
  const timestampToDate = () => {
    const date = new Date(notification.notificationDate.seconds * 1000 + notification.notificationDate.nanoseconds/1000000).toLocaleString()
    return date
  }
  return (
    <NotificationItemParentContainer>
      <NotificationItemContainer>
        <NotificationImageContainer image={!notification.photoUrl ? 
          'https://firebasestorage.googleapis.com/v0/b/freechat-5f726.appspot.com/o/photos%2FdefaultPicture.jpg?alt=media&token=278fa04b-a424-4a42-b5a4-d9fcd3fcd9c4'
          : notification.photoUrl}/>
        <NotificationDetailsContainer>
        <NotificationLabel>{notification.name}</NotificationLabel>
        <NotificationDetail>{notification.selfDesc}</NotificationDetail>
        <NotificationDate>{timestampToDate()}</NotificationDate>
        </NotificationDetailsContainer>
      </NotificationItemContainer>
      <ColumnContainer>
        <AcceptButton onClick={e => acceptContactOnClickHandler(e)}>Accept</AcceptButton>
        <DeclineButton onClick={e => declineContactOnClickHandler(e)}>Decline</DeclineButton>
      </ColumnContainer>
    </NotificationItemParentContainer>
  )
}

export default NotificationItem