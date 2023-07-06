import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { selectIsLoggingIn, selectLoadingUser, selectSigningUp, selectUser, selectUserError } from "../../store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { select_isOpen_SignInError, select_isOpen_SignInSignUpError, select_isOpen_SignUpError } from "../../store/display/display.selector"
import { MainParentContainer } from "./main.styles"
import { OpenModal_SignInError, OpenModal_SignUpError } from "../../store/display/display.action"
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
  const dispatch = useDispatch()
  const isLoggingIn = useSelector(selectIsLoggingIn)
  const isSigningUp = useSelector(selectSigningUp)

  useEffect(() => {
    isOpen_SignUpError && closeErrorPopup(localError, userError)
  },[isOpen_SignUpError])
  useEffect(() => {
    isOpen_SignInError && closeErrorPopup(localError, userError)
  },[isOpen_SignInError])
  useEffect(() => {
    if(location.pathname === '/login'){
      if(Object.keys(user).length > 0){
        navigate('/')
      } 
    }
    else if(location.pathname === '/'){
      if(Object.keys(user).length < 1){
        navigate('/login')
      } 
    }
  },[location, user])
  // useEffect(() => {
  //   console.log('OHOY signing: ', isSigningUp)
  //   console.log('OHOY logging: ', isLoggingIn)
  //   if(!isSigningUp && 
  //     !isLoggingIn
  //     ){
  //     isLoading = false
  //   }
  // },[isSigningUp, isLoggingIn])
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