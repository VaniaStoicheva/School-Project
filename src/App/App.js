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
import Posts from "../Posts/Posts";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* function render(title, Cmp) {
  return function ({ match }) {

    return <Main title={title}><Cmp match={match} /></Main>
  };
} */
function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       {/*<Loader local={true} isLoading={false} />  */} 
        <Navigation />
        <div className="Container">
          
          <Switch>
            <Route path="/" exact><Redirect to="/allCourses" /></Route>
            <Route path="/allCourses" render={render('All Course', AllCourses)} />
            <Route path="/addNewCourse" component={AddNewCourse}/>
            <Route path="/addToCourse" component={AddToCourse} />
            <Route path="/posts" component={Posts} />
           
            <Route path="/register" render={render('Register', Register)} />
            
            <Route path="/login" component={Login} />
            <Route path="/notfound" componenet={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
