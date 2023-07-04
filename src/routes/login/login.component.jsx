import { useNavigate } from "react-router-dom"
import { Form, JustifyCenterRowContainer, Label, RowContainer } from "../../common_styled_components/common.styles"
import { ClickableText, CredentialContainer, FreechatLabel, LoginButton, LoginContainer, LoginInput, LoginParentContainer, SignupLabel } from "./login.styles"
import { useDispatch, useSelector } from "react-redux"
import { loginStart } from "../../store/user/user.action"
import { useEffect, useRef } from "react"
import { OpenModal_SignUpError } from "../../store/display/display.action"
import { selectUser, selectUserError } from "../../store/user/user.selector"
import { AnimatePresence } from "framer-motion"
import Modal from "../../components/modal/modal.component"
import { motion } from "framer-motion"
import { select_isOpen_SignInError, select_isOpen_SignUpError } from "../../store/display/display.selector"

const Login = () => {
  const user = useSelector(selectUser)
  const userError = useSelector(selectUserError)
  const isOpen_SignInError = useSelector(select_isOpen_SignInError)
  const isOpen_SignUpError = useSelector(select_isOpen_SignUpError)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const logInHandler = (e) => {
    e.preventDefault()
    const emailInput = emailRef.current.value
    const passwordInput = passwordRef.current.value
    dispatch(loginStart(emailInput, passwordInput))
  }
  const signUpHandler = () => {
    navigate('/signup')
  }
  useEffect(() => {
    isOpen_SignUpError && dispatch(OpenModal_SignUpError(false))
  },[])
  // useEffect(() => {
  //   (user !== null || (user && Object.keys(user).length > 0)) && navigate('/')
  //   console.log('user at login: ', user)
  // },[user])
  return (
    <motion.div
      initial= {{opacity: 0}}
      animate= {{opacity: 1}}
      exit= {{opacity: 0}}
    >
      <LoginParentContainer>
        <LoginContainer>
          <FreechatLabel>Freechat</FreechatLabel>
          <Form onSubmit={e => logInHandler(e)}>
            <CredentialContainer>
              <Label>Email</Label>
              <RowContainer>
                <LoginInput ref={emailRef} type='email' required/>
              </RowContainer>
            </CredentialContainer>
            <CredentialContainer>
              <Label>Password</Label>
              <RowContainer>
                <LoginInput ref={passwordRef} type='password' required/>
              </RowContainer>
            </CredentialContainer>
            <JustifyCenterRowContainer>
              <LoginButton type='submit'>Login</LoginButton>
            </JustifyCenterRowContainer>
          </Form>
          <SignupLabel>No account yet? <ClickableText onClick={signUpHandler}>Sign up</ClickableText></SignupLabel>
        </LoginContainer>
        <AnimatePresence>
          {
            isOpen_SignInError && <Modal textArray={userError} type='logInSignUp'/>
          }
        </AnimatePresence>
      </LoginParentContainer>
    </motion.div>
  )
}

export default Login