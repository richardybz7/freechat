import { useEffect, useRef } from "react"
import { UserSearchResultParentContainer, UserInfoContainer, ImageContainer, GettingUserInfoAnim, UserNotFound, GettingUserInfoAnimContainer, ButtonLoading, LoadingPendingContactsAnim, SearchContactButtonContainer, PendingButton } from "./userSearchResult.styles"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfoStart } from "../../store/immediateInfo/immediateInfo.action"
import { selectImmedUserInfos, selectLoadingImmedUserInfos } from "../../store/immediateInfo/immediateInfo.selector"
import { AlignCenterRowContainer, Button, JustifyCenterColContainer, JustifyCenterRowContainer, Label } from "../../common_styled_components/common.styles"
import { selectContacts } from "../../store/contacts/contacts.selector"
import { selectUser } from "../../store/user/user.selector"
import { updatePendingContactsStart } from "../../store/pendingContacts/pendingContacts.action"
import { addNotificationStart } from "../../store/notifications/notifications.action"
import { selectLoadingPendingContacts } from "../../store/pendingContacts/pendingContacts.selector"
import { CheckingSVG } from "../../common_styled_components/result.styles"
import SearchContactButton from "../searchContactButton/searchContactButton.component"
const UserSearchResult = ({userDispName, contacts, pendingContacts, user}) => {
  const dispatch = useDispatch()
  const isLoadingUserInfos = useSelector(selectLoadingImmedUserInfos)
  const userInfos = useSelector(selectImmedUserInfos)
  const isLoadingPendingContacts = useSelector(selectLoadingPendingContacts)
  const buttonRef = useRef([])

  const addToContactsOnClickHandler = (e, targetID, elementID) => {
    e.preventDefault()
    
    buttonRef.current[elementID].textContent = 'Pending'
    buttonRef.current[elementID].style.backgroundColor = 'var(--color3)'
    buttonRef.current[elementID].style.color = 'white'
    const date = new Date()
    const userAddNotificationData = {
      contactID: user.id,
      photoUrl: user.photoUrl,
      name: user.name,
      selfDesc: user.selfDesc,
      notificationType: 'user',
      notificationDate: date
    }
    dispatch(updatePendingContactsStart(user.id, targetID))
    dispatch(addNotificationStart(targetID, userAddNotificationData))
  }
  const chatOnClickHandler = (e, id) => {
    e.preventDefault()

  }
  useEffect(() => {
    dispatch(getUserInfoStart(userDispName, contacts, pendingContacts, user.id))
  },[userDispName])
  return (
    <UserSearchResultParentContainer>
      {
        isLoadingUserInfos ? (
          <GettingUserInfoAnimContainer>
            <GettingUserInfoAnim/>
          </GettingUserInfoAnimContainer>
        ):(
          userInfos && userInfos.length ? (
            userInfos.map((userInfo, index) => 
            <UserInfoContainer key={index} bg={userInfo.coverPhotoUrl}>
              <ImageContainer image={!userInfo.photoUrl ? 
                'https://firebasestorage.googleapis.com/v0/b/freechat-5f726.appspot.com/o/photos%2FdefaultPicture.jpg?alt=media&token=278fa04b-a424-4a42-b5a4-d9fcd3fcd9c4'
                : userInfo.photoUrl
              }/>
              <JustifyCenterColContainer>
                <Label>{userInfo.name}</Label>
                {
                  userInfo.userStatus ? (
                    userInfo.userStatus === 'isContact' ? (
                      <Button 
                        ref={el => buttonRef.current[index] = el}
                        onClick={e => chatOnClickHandler(e, userInfo.id, index)}
                      >
                        Chat
                      </Button>
          
                    ):(
                      userInfo.userStatus === 'isPending' &&
                        <PendingButton 
                          ref={el => buttonRef.current[index] = el}
                        >
                          Pending
                        </PendingButton>
                    )
                  ):(
                    <Button 
                      ref={el => buttonRef.current[index] = el}
                      onClick={e => addToContactsOnClickHandler(e, userInfo.id, index)}
                    >
                      Add to Contacts
                    </Button>
                  )
                }
                  
              </JustifyCenterColContainer>
            </UserInfoContainer>
          )
          ):(
            <JustifyCenterRowContainer>
              <UserNotFound>User not found</UserNotFound>
            </JustifyCenterRowContainer>
          )
          
        )
      }
    </UserSearchResultParentContainer>
  )
}

export default UserSearchResult