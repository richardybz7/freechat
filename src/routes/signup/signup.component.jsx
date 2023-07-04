import { useDispatch, useSelector } from "react-redux"
import { ColumnContainer, Form, Input, JustifyCenterRowContainer, Label, RowContainer } from "../../common_styled_components/common.styles"
import { ApprovedSVGSignUp, CheckingSVGSignUp, CredentialContainer, FreechatLabel, NotApprovedSVGSignUp, OptionalLabel, SelfDescLabelContainer, SelfDescription, SignUpButton, SignUpContainer, SignUpInput, SignUpParentContainer } from "./signup.styles"
import { createUserStart } from "../../store/user/user.action"
import { AnimatePresence } from "framer-motion"
import { checkEmailStart, checkUserDispNameStart } from "../../store/immediateInfo/immediateInfo.action"
import { selectIsEmailAvailable, selectIsUserDispNameAvailable, selectLoadingImmedEmails, selectLoadingImmedUserDispNames } from "../../store/immediateInfo/immediateInfo.selector"
import { useRef, useState } from "react"
import { selectUserError } from "../../store/user/user.selector"
import { select_isOpen_SignUpError } from "../../store/display/display.selector"
import Modal from "../../components/modal/modal.component"
import { OpenModal_SignUpError } from "../../store/display/display.action"
import { addError, checkErrorExist, closeErrorPopup, errorObj, removeError } from "../../utils/error.utils"
import { setError } from "../../store/error/error.action"
import { selectError } from "../../store/error/error.selector"

const SignUp = () => {
  const [showEmailResult, setShowEmailResult] = useState(false)
  const [isEmailPattern, setIsEmailPattern] = useState(false)
  const [showPasswordResult, setShowPasswordResult] = useState(false)
  const [isPasswordPattern, setIsPasswordPattern] = useState(false)
  const [showUserDispNameResult, setShowUserDispNameResult] = useState(false)
  const [selfDescLength, setSelfDescLength] = useState(0)

  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')
  const dispNameRef = useRef('')
  const selfDescRef= useRef('')

  const isLoading_Emails = useSelector(selectLoadingImmedEmails)
  const isEmailAvailable = useSelector(selectIsEmailAvailable)
  const isLoading_UserDispNames = useSelector(selectLoadingImmedUserDispNames)
  const isUserDispNameAvailable = useSelector(selectIsUserDispNameAvailable)
  const localError = useSelector(selectError)
  const userError = useSelector(selectUserError)
  const isOpen_SignUpError = useSelector(select_isOpen_SignUpError)

  const dispatch = useDispatch()

  const isEmailFormat = (input) => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(input)
  }
  const isPasswordFormat = (passwordInput) => {
    const passwordPattern = /^.{8,}$/
    return passwordPattern.test(passwordInput)
  }
  const emailOnChangeHandler = () => {
    const emailInput = emailRef.current.value
    emailInput.length > 0 ? setShowEmailResult(true) : setShowEmailResult(false)
    if(showEmailResult){
      const isEmailRes = isEmailFormat(emailInput)
      isEmailRes ? setIsEmailPattern(true) : setIsEmailPattern(false)
      if(isEmailRes){
        dispatch(checkEmailStart({emailInput}))
      }
    }
  }
  const passwordOnChangeHandler = () => {
    const passwordInput = passwordRef.current.value
    passwordInput.length > 0 ? setShowPasswordResult(true) : setShowPasswordResult(false)
    if(passwordInput.length > 0){
      const isPasswordFormatRes = isPasswordFormat(passwordInput)
      isPasswordFormatRes ? setIsPasswordPattern(true) : setIsPasswordPattern(false)
    }
  }
  const displayNameOnChangeHandler = () => {
    const dispNameInput = dispNameRef.current.value
    dispNameInput.length > 0 ? setShowUserDispNameResult(true) : setShowUserDispNameResult(false)
    dispNameInput.length > 0 && dispatch(checkUserDispNameStart({dispNameInput}))
  }
  const selfDescOnChangeHandler = () => {
    const selfDescInput = selfDescRef.current.value
    setSelfDescLength(selfDescInput.length)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    let errorObj = {}
    const emailInput = emailRef.current.value
    if(!isEmailFormat(emailInput)){
      errorObj = addError(errorObj, 0, 'Invalid email format')
    }
    else if(!isEmailAvailable){
      errorObj = addError(errorObj, 0, 'Email already used')
    }
    else{
      checkErrorExist(0) && removeError(0)
    }

    const passwordInput = passwordRef.current.value
    if(passwordInput.length < 8){
      errorObj = addError(errorObj, 1, 'Password must be at least 8 characters')
    }
    else{
      checkErrorExist(1) && removeError(1)
    }

    const confirmPasswordInput = confirmPasswordRef.current.value
    if(confirmPasswordInput !== passwordInput){
      errorObj = addError(errorObj, 2, 'Confirm password do not match')
    }
    else{
      checkErrorExist(2) && removeError(2)
    }

    const dispNameInput = dispNameRef.current.value
    if(!isUserDispNameAvailable){
      errorObj = addError(errorObj, 3, `${dispNameInput} is already taken`)
    }
    else{
      checkErrorExist(3) && removeError(3)
    }

    if(!isLoading_Emails && !isLoading_UserDispNames){
      if(Object.keys(errorObj).length === 0){
        dispatch(createUserStart(
          {
            email: emailRef.current.value, 
            password: passwordRef.current.value, 
            userDispName: dispNameRef.current.value, 
            selfDesc: selfDescRef.current.value
          }
        ))
      }
      else{
        dispatch(setError(errorObj))
        dispatch(OpenModal_SignUpError(true))
        closeErrorPopup(localError, userError)
      }
    }
  }
  return (
    <SignUpParentContainer>
      <SignUpContainer>
        <FreechatLabel>Freechat</FreechatLabel>
        <Form onSubmit={e => onSubmitHandler(e)}>
          <CredentialContainer>
            <Label>Email</Label>
            <RowContainer>
              <SignUpInput 
                ref={emailRef} 
                required 
                type="email" 
                onChange={emailOnChangeHandler}
              />
              {
                showEmailResult && (
                  !isEmailPattern ? <NotApprovedSVGSignUp/>
                  : isLoading_Emails ? <CheckingSVGSignUp/>
                  : isEmailAvailable ? <ApprovedSVGSignUp/>
                  : <NotApprovedSVGSignUp/>
                )
              }
            </RowContainer>
          </CredentialContainer>
          <CredentialContainer>
            <Label>Password</Label>
            <RowContainer>
              <SignUpInput 
                ref={passwordRef} 
                required 
                type="password" 
                onChange={passwordOnChangeHandler}
              />
              {
                showPasswordResult && (
                  isPasswordPattern ? <ApprovedSVGSignUp/>
                  : <NotApprovedSVGSignUp/>
                )
              }
            </RowContainer>
          </CredentialContainer>
          <CredentialContainer>
            <Label>Confirm password</Label>
            <RowContainer>
              <SignUpInput 
                ref={confirmPasswordRef}
                required 
                type="password"
              />
            </RowContainer>
          </CredentialContainer>
          <CredentialContainer>
            <Label>Display name</Label>
            <RowContainer>
              <SignUpInput 
                ref={dispNameRef} 
                required 
                onChange={displayNameOnChangeHandler}
                maxLength={12}
              />
              {
                showUserDispNameResult && (
                  isLoading_UserDispNames ? <CheckingSVGSignUp/>
                  : isUserDispNameAvailable ? <ApprovedSVGSignUp/>
                  : <NotApprovedSVGSignUp/>
                )
              }
            </RowContainer>
          </CredentialContainer>
          <CredentialContainer>
            <SelfDescLabelContainer>
              <Label>Self description<i><OptionalLabel>&nbsp;(optional)</OptionalLabel></i></Label>
              {
                <OptionalLabel>{selfDescLength}/100</OptionalLabel>
              }
            </SelfDescLabelContainer>
            <RowContainer>
              <SelfDescription 
                ref={selfDescRef}
                onChange={selfDescOnChangeHandler}
                maxLength={100}
              />
            </RowContainer>
          </CredentialContainer>
          <JustifyCenterRowContainer>
            <SignUpButton 
              type="submit"
              isLoadingEmail={isLoading_Emails}
              isLoadingUserDispNames={isLoading_UserDispNames} 
              >
              Sign up
            </SignUpButton>
          </JustifyCenterRowContainer>
        </Form>
      </SignUpContainer>
      <AnimatePresence>
          {
            isOpen_SignUpError && <Modal textArray={Object.values(localError)} type='logInSignUp'/>
          }
        </AnimatePresence>
    </SignUpParentContainer>
  )
}

export default SignUp
