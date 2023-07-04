import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectUserError } from "../../store/user/user.selector"
import { LoadingParentContainer } from "./loadingScreen.styles"

const LoadingScreen = () => {
  return (
    <LoadingParentContainer>
      LOADING
    </LoadingParentContainer>
  )
}

export default LoadingScreen