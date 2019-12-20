import React from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import AllCourses from "../Courses/AllCourses/AllCourses";
import AddNewCourse from "../Courses/AddNewCourse/AddNewCourse";
import AddToCourse from "../Courses/AddToCourse/AddToCourse";
import Logout from '../Logout/Logout';
import Posts from "../Comments/Posts/Posts";
import CreatePost from '../Comments/CreatePost/CreatePost';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Notification from '../Notification/Notification';


function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

/* function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
} */

class App extends React.Component {
  constructor(props){
    super(props)
    const isLogged=!!sessionStorage.getItem('authtoken');
    
    this.state={ isLogged }
  }

  
  render(){
    const { isLogged }=this.state;
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation isLogged={isLogged}/>
        <h1>Alegria -курсове за многознайковци</h1>
        <div className="Container">
          <Notification />
          <Switch>
            <Route path="/" exact><Redirect to="/allCourses" /></Route>
            <Route path="/allCourses" render={render('', AllCourses)} />
            {isLogged && <Route path="/addNewCourse" render={render('', AddNewCourse, { isLogged })}/>}
            {isLogged && <Route path="/addToCourse" render={render('', AddToCourse, { isLogged })} />}
            {isLogged && <Route path="/createPost" render={render('', CreatePost, { isLogged })} />}
            {isLogged && <Route path="/posts" render={render('', Posts, { isLogged })} />}
             <Route path="/register" render={render('', Register,{isLogged})} />
             <Route path="/login" render={render('', Login, {isLogged})} />
            <Route path="/logout" render={render('Logout', Logout, {isLogged})} />
            <Route path="*" render={render('', NotFound)} />
          </Switch>
        </div>
        {/* <Footer isLogged={isLogged}/> */}
      </div>
    </BrowserRouter>
  );
}
}
export default App;
