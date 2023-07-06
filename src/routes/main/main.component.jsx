import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { selectLoadingUser, selectUser, selectUserError } from "../../store/user/user.selector"
import { useSelector } from "react-redux"
import { select_isOpen_SignInError, select_isOpen_SignUpError } from "../../store/display/display.selector"
import { MainParentContainer } from "./main.styles"
import { closeErrorPopup } from "../../utils/error.utils"
import { selectError } from "../../store/error/error.selector"
import { Fragment } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "../../components/loadingScreen/loadingScreen.component"

const Main = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const isOpen_SignInError = useSelector(select_isOpen_SignInError)
  const isOpen_SignUpError = useSelector(select_isOpen_SignUpError)
  const localError = useSelector(selectError)
  const userError = useSelector(selectUserError)
  const location = useLocation()
  const loadingUser = useSelector(selectLoadingUser)

  useEffect(() => {
    isOpen_SignUpError && closeErrorPopup(localError, userError)
  },[isOpen_SignUpError])
  useEffect(() => {
    isOpen_SignInError && closeErrorPopup(localError, userError)
  },[isOpen_SignInError])
  useEffect(() => {
    if(location.pathname === '/login'){
      if(user && Object.keys(user).length > 0){
        navigate('/')
      } 
    }
    else if(location.pathname === '/'){
      if(!user){
        navigate('/login')
      }
      if(user && Object.keys(user).length < 1){
        navigate('/login')
      } 
    }
  },[location, user])
  useEffect(() => {
    !loadingUser && !user && navigate('/login')
  },[loadingUser])
  return (
    <Fragment>
      {
        loadingUser ? (
            <AnimatePresence>
              <LoadingScreen/>
            </AnimatePresence>
          ):(
            <MainParentContainer>
              <Outlet/>
            </MainParentContainer>
          )
      }
    </Fragment>
  )
}

export default Main