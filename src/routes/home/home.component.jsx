import { AnimatePresence } from "framer-motion"
import TopNavbar from "../../components/TopNavbar/topNavbar.component"
import UserAction from "../../components/bottomUserActionbar/userActionbar.component"
import MiddleContent from "../../components/middleContent/middleContent.component"
import { HomeContainer } from "./home.styles"
import { useDispatch, useSelector } from "react-redux"
import { select_isOpen_AddRoom, select_isOpen_Menu, select_isOpen_Notification, select_isOpen_RoomAvatarModal, select_isOpen_Search, select_isOpen_Styles } from "../../store/display/display.selector"
import { OpenAddRoom, OpenMenu, OpenModal_RoomAvatar, OpenNotification, OpenSearch, OpenStyles } from "../../store/display/display.action"
import Modal from '../../components/modal2/modal.component'

const Home = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(select_isOpen_Menu)
  const isAddRoomOpen = useSelector(select_isOpen_AddRoom)
  const isSearchOpen = useSelector(select_isOpen_Search)
  const isStylesOpen = useSelector(select_isOpen_Styles)
  const isRoomAvatarOpen = useSelector(select_isOpen_RoomAvatarModal)
  const isNotificationOpen = useSelector(select_isOpen_Notification)
  const closeAvatar = () => {
    dispatch(OpenModal_RoomAvatar(false))
  }
  const closeMenu = () => {
    dispatch(OpenMenu(false))
  }
  const closeAddRoom = () => {
    dispatch(OpenAddRoom(false))
  }
  const closeSearch = () => {
    dispatch(OpenSearch(false))
  }
  const closeStyles = () => {
    dispatch(OpenStyles(false))
  }
  const closeNotification = () => {
    dispatch(OpenNotification(false))
  }
  return (
    <HomeContainer>
      <TopNavbar/>
      <MiddleContent/>
      <UserAction/>
      <AnimatePresence>
        {
          isMenuOpen && <Modal purpose='menu' closeModal={closeMenu}/>
        }
        {
          isAddRoomOpen && <Modal purpose='add' closeModal={closeAddRoom}/>
        }
        {
          isRoomAvatarOpen && <Modal purpose='avatar' closeModal={closeAvatar}/>
        }
        {
          isSearchOpen && <Modal purpose='search' closeModal={closeSearch}/>
        }
        {
          isStylesOpen && <Modal purpose='styles' closeModal={closeStyles}/>
        }
        {
          isNotificationOpen && <Modal purpose='notification' closeModal={closeNotification}/>
        }
      </AnimatePresence>
    </HomeContainer>
  )
}

export default Home