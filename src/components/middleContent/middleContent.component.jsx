import LeftNavbar from "../leftNavbar/leftNavbar.component"
import Messages from "../messages/messages.component"
import { MiddleContentContainer } from "./middleContent.styles"

const MiddleContent = () => {
  return (
    <MiddleContentContainer>
      <LeftNavbar/>
      <Messages/>
    </MiddleContentContainer>
  )
}

export default MiddleContent