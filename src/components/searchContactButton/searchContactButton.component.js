import { Fragment } from "react"
import { Button } from "../../common_styled_components/common.styles"
import { useSelector } from "react-redux"
import { selectLoadingPendingContacts } from "../../store/pendingContacts/pendingContacts.selector"
import { ButtonLoading, LoadingPendingContactsAnim } from "./searchContactButton.styles"

const SearchContactButton = ({id, userInfo, addToContactsOnClick, chatOnClick}) => {
  const isLoadingPendingContacts = useSelector(selectLoadingPendingContacts)
  
  return (
    <Fragment>
      {
        userInfo.userStatus ? (
          userInfo.userStatus === 'isContact' ? (
            <Button 
              onClick={e => chatOnClick(e, userInfo.id)}
            >
              Chat
            </Button>

          ):(
            userInfo.userStatus === 'isPending' &&
              <Button 
                disabled
              >
                Pending
              </Button>
          )
        ):(
          <Button 
            onClick={e => addToContactsOnClick(e, userInfo.id, id)}
          >
            Add to Contacts
          </Button>
        )
      }
    </Fragment>
  )
}

export default SearchContactButton