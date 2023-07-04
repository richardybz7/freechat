import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { selectUser, selectUserError } from "../../store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { select_isOpen_SignInError, select_isOpen_SignInSignUpError, select_isOpen_SignUpError } from "../../store/display/display.selector"
import { MainParentContainer } from "./main.styles"
import { OpenModal_SignInError, OpenModal_SignUpError } from "../../store/display/display.action"
import { closeErrorPopup } from "../../utils/error.utils"
import { selectError } from "../../store/error/error.selector"

const Main = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const isOpen_SignInError = useSelector(select_isOpen_SignInError)
  const isOpen_SignUpError = useSelector(select_isOpen_SignUpError)
  const localError = useSelector(selectError)
  const userError = useSelector(selectUserError)
  const location = useLocation()
  const dispatch = useDispatch()
  
  useEffect(() => {
    isOpen_SignUpError && closeErrorPopup(localError, userError)
  },[isOpen_SignUpError])
  useEffect(() => {
    isOpen_SignInError && closeErrorPopup(localError, userError)
  },[isOpen_SignInError])
  useEffect(() => {
    if(location.pathname === '/'){
      //(!user || (user && Object.keys(user).length === 0)) && navigate('/login')
    }
    else{
      (user && (user && Object.keys(user).length > 0)) && navigate('/')
    }
  },[location])
  return (
    <MainParentContainer>
      <Outlet/>
    </MainParentContainer>
  )
}

export default Main