import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";





const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route exact path='/profile' render={ () => <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}/>}/>
          <Route exact path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route exact path='/news' component={News}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/settings' component={Settings}/>
        </div>
      </div>
  );
}

export default App;
