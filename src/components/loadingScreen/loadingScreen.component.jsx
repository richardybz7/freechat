import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectIsLoggingIn, selectSigningUp, selectUser, selectUserError } from "../../store/user/user.selector"
import { LoadingParentContainer } from "./loadingScreen.styles"

const LoadingScreen = () => {
  const user = useSelector(selectUser)
  const isLoggingIn = useSelector(selectIsLoggingIn)
  const isSigningUp = useSelector(selectSigningUp)
  const navigate = useNavigate()
  useEffect(() => {
    if(Object.keys(user).length > 0){
      navigate('/')
    }
  },[user])
  useEffect(() => {
    console.log('OHOY signing: ', isSigningUp)
    console.log('OHOY logging: ', isLoggingIn)
  },[isLoggingIn, isSigningUp])
  return (
    <LoadingParentContainer>
      LOADING
    </LoadingParentContainer>
  )
}

export default LoadingScreen