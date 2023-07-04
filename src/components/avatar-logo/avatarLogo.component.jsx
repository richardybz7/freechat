import { useDispatch } from "react-redux"
import { AvatarLogoContainer, AvatarLogo_, AvatarLogoLabel, ClickableText } from "./avatarLogo.styles"
import { OpenModal_RoomAvatar } from "../../store/display/display.action"

const AvatarLogo = ({purpose}) => {
  const dispatch = useDispatch()
  const AvatarLogoHandler = () => {
    if(purpose === 'add')
    dispatch(OpenModal_RoomAvatar(true))
  }
  return (
    <AvatarLogoContainer>
      <AvatarLogo_ onClick={AvatarLogoHandler}/>
      <AvatarLogoLabel>Tap to select an avatar
      or <ClickableText>upload an image</ClickableText></AvatarLogoLabel>
    </AvatarLogoContainer>
  )
}

export default AvatarLogo