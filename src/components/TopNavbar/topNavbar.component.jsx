import { useDispatch, useSelector } from "react-redux"
import { TopNavbarLeftSideContainer, TopNavbarRightSideContainer, TopNavbarContainer, BurgerContainer, FreechatLabel, BurgerLines, NotificationContainer, AllChatContainer, AllChatSVG, NotificationSVG } from "./topNavbar.styles"
import { OpenMenu, OpenNotification } from "../../store/display/display.action"
import { useRef } from "react"
import { select_isOpen_Menu, select_isOpen_Notification } from "../../store/display/display.selector"
import { selectNotifications } from "../../store/notifications/notifications.selector"
import { useEffect } from "react"

const TopNavbar = () => {
  const dispatch = useDispatch()
  const topbarRef = useRef()
  const isMenuOpen = useSelector(select_isOpen_Menu)
  const isNotificationOpen = useSelector(select_isOpen_Notification)
  const notification = useSelector(selectNotifications)
  const burgerHandler = () => {
    if(isMenuOpen){
      dispatch(OpenMenu(false))
    }
    else{
      if(isNotificationOpen){
        dispatch(OpenNotification(false))
      }
      dispatch(OpenMenu(true))
      topbarRef.current.style.zIndex = '1'
    }
  }
  const openNotification = () => {
    if(isNotificationOpen){
      dispatch(OpenNotification(false))
    }
    else{
      if(isMenuOpen){
        dispatch(OpenMenu(false))
      }
      dispatch(OpenNotification(true))
      topbarRef.current.style.zIndex = '1'
    }
  }
  return (
    <TopNavbarContainer ref={topbarRef}>
      <TopNavbarLeftSideContainer>
        <BurgerContainer onClick={burgerHandler}>
          <BurgerLines/>
          <BurgerLines/>
          <BurgerLines/>
        </BurgerContainer>
        <FreechatLabel>Freechat</FreechatLabel>
      </TopNavbarLeftSideContainer>
      <TopNavbarRightSideContainer>
        <NotificationContainer onClick={openNotification} hasNotification={notification && Object.keys(notification).length > 0}>
          <NotificationSVG/>
        </NotificationContainer>
      </TopNavbarRightSideContainer>
    </TopNavbarContainer>
  )
}

export default TopNavbar