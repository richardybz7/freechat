import styled, { css } from "styled-components";
import NotificationSVG_ from '../../assets/Notification.svg'

export const TopNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  background-color: var(--color1);
  box-sizing: border-box;
`
export const BurgerContainer = styled.div`
  cursor: pointer;
  padding-top: 0.2em;
  width: 30px; //temporary
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.25em;
`
export const BurgerLines = styled.div`
  background-color: white;
  height: 0.2em;
  width: 30px;
`
export const TopNavbarLeftSideContainer = styled.div`
  padding: 0.5em 0 0.5em 1.2em;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5em;
`
export const FreechatLabel = styled.div`
  background-color: transparent;
  color: white;
  font-size: 1.7rem;
`
export const TopNavbarRightSideContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NotificationContainer = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
  transition: 0.2s ease-out;
  position: relative;
  :hover{
    background-color: var(--color4);
  }
  ${prop => prop.hasNotification && css`
    ::before{ //temp
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      background-color: red;
      border-radius: 100%;
      top: 10px;
      right: 11px;
    }
  `}
`
export const NotificationSVG = styled.div`
  background-image: url(${NotificationSVG_});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
`