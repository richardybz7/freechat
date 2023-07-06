import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NotFound from './routes/notFound/notFound.component';
import SignUp from './routes/signup/signup.component';
import Login from './routes/login/login.component';
import { Fragment, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import Main from './routes/main/main.component';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSessionStart } from './store/user/user.action';
import { selectIsLoggingIn, selectLoadingUser, selectSigningUp } from './store/user/user.selector';
import { selectLoadingNotifications } from './store/notifications/notifications.selector';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/loadingScreen/loadingScreen.component';

const App = () => {
  const dispatch = useDispatch()
  const isLoadingNotifications = useSelector(selectLoadingNotifications)
  const isLoadingUser = useSelector(selectLoadingUser)
  
  useEffect(() => {
    dispatch(checkUserSessionStart())
  },[])
  return (
    <Fragment>
      <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Fragment>
  )
}

export default App;
