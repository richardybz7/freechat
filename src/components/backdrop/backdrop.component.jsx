import { BackdropStyle } from "./backdrop.styles"

const Backdrop = ({children, onClick, type}) => {
  const onClickHandler = () => {
    type !== 'signUp' && onClick()
  }
  return (
    <BackdropStyle onClick={onClickHandler} type={type}>
      {children}
    </BackdropStyle>
  )
}

export default Backdrop