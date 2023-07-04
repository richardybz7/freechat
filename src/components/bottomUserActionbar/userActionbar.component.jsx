import { Fragment, useRef, useState } from "react";
import { CameraSVG, ClipSVG, MessageInput, MessageInputContainer, SendSVG, UserActionContainer, UserActionParentContainer, UserAction_ } from "./userAction.styles"
import { RightArrowHeadSVG } from "../leftNavbar/leftNavbar.styles";
import { useDispatch, useSelector } from "react-redux";
import { OpenLeftUserAction } from "../../store/display/display.action";
import { select_isOpen_LeftUserAction } from "../../store/display/display.selector";

const UserAction = () => {
  const dispatch = useDispatch()
  const isLeftUserActionOpen = useSelector(select_isOpen_LeftUserAction)
  const textareaRef = useRef(null)
  const [textAreaValue, setTextAreaValue] = useState('')
  const [textareaHeight, setTextareaHeight] = useState('auto');

  
  
  const focusMessage = (e) => {
    const textarea = textareaRef.current;
    if(!isLeftUserActionOpen && textAreaValue)
      textarea.scrollTop = textarea.scrollHeight
  }
  const textAreaOnChangeHandler = (e) => {
    const textarea = textareaRef.current;
    e.preventDefault()
    setTextAreaValue(e.target.value)
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
    setTextareaHeight(`${textarea.scrollHeight}px`)
    if(isLeftUserActionOpen)
      dispatch(OpenLeftUserAction(false))
  }
  const sendMessage = () => {
    if(textAreaValue){
      setTextAreaValue('')
    }
    if(!isLeftUserActionOpen)
      dispatch(OpenLeftUserAction(true))
  }
  const onKeyDownHandler = (e) => {
    if(!isLeftUserActionOpen)
      focusMessage()
    if(e.key === 'Enter'){
      e.preventDefault()
      sendMessage()
      dispatch(OpenLeftUserAction(true))
    }
    if(e.key === 'Escape')
      if(!isLeftUserActionOpen)
      dispatch(OpenLeftUserAction(true))
  }
  const openLeftUserAction = () => {
    dispatch(OpenLeftUserAction(true))
  }
  const textareaOnBlurHandler = () => {
    if(!textAreaValue)
      dispatch(OpenLeftUserAction(true))
  }
  return (
    <UserActionParentContainer>
    {
      isLeftUserActionOpen ?
      <Fragment>
      {
        // <UserActionContainer>
        //   <UserAction_>
        //     <CameraSVG/>
        //   </UserAction_>
        // </UserActionContainer>
        // <UserActionContainer>
        //   <UserAction_>
        //     <ClipSVG/>
        //   </UserAction_>
        // </UserActionContainer>
      }
      </Fragment>
      :
      <UserActionContainer>
        <UserAction_ onClick={openLeftUserAction}>
          <RightArrowHeadSVG/>
        </UserAction_>
      </UserActionContainer>
    }
      <MessageInputContainer>
        <MessageInput 
          placeholder="Aa"
          ref={textareaRef}
          style={{ height: textareaHeight }}
          rows='1'
          onClick={(e) => focusMessage(e)}
          onChange={(e) => textAreaOnChangeHandler(e)}
          value={textAreaValue}
          onKeyDown={(e) => onKeyDownHandler(e)}
          onBlur={textareaOnBlurHandler}
          />
        <UserActionContainer send onClick={sendMessage}>
          <UserAction_ send>
            <SendSVG/>
          </UserAction_>
        </UserActionContainer>
      </MessageInputContainer>
      {
        // <UserActionContainer>
        //   <UserAction_>
        //     &#x1F601;
        //   </UserAction_>
        // </UserActionContainer>
      }
    </UserActionParentContainer>
  )
}

export default UserAction