import React from 'react';
import Loader from "./Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import AllCourses from "../Courses/AllCourses/AllCourses";
import AddNewCourse from "../Courses/AddNewCourse/AddNewCourse";
import AddToCourse from "../Courses/AddToCourse/AddToCourse";
import userService from '../services/UserService';
import Logout from '../Logout/Logout';
import Posts from "../Posts/Posts";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {
  constructor(props){
    super(props)
    const cookies=parseCookeis();
    const isLogged=!!cookies['x-auth-token'];
    this.state={ isLogged }
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }
  render(){
    const { isLogged }=this.state;
  return (
    <BrowserRouter>
      <div className="App">
       {/*<Loader local={true} isLoading={false} />  */} 
        <Navigation isLogged={isLogged}/>
        <h1>Alegria -курсове за многознайковци</h1>
        <div className="Container">
          
          <Switch>
            <Route path="/" exact><Redirect to="/allCourses" /></Route>
            <Route path="/allCourses" render={render('', AllCourses)} />
            <Route path="/addNewCourse" render={render('', AddNewCourse, { isLogged })}/>
            <Route path="/addToCourse" render={render('', AddToCourse, { isLogged })} />
            <Route path="/posts" render={render('', Posts, { isLogged })} />
            <Route path="/register" render={render('', Register)} />
            <Route path="/login" render={render('', Login, {isLogged, login:this.login})} />
            <Route path="/logout" render={render('Logout', Logout, {isLogged, logout:this.logout})} />
            <Route path="/notfound" render={render('NotFound', NotFound)} />
          </Switch>
        </div>
        <Footer isLogged={isLogged}/>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
