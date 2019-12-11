import React from 'react';
import Loader from "./Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import AllKourse from "../Kourse/AllKourses/AllKourse";
import AddNewKourse from "../Kourse/AddNewKourse/AddNewKourse";
import AddToKourse from "../Kourse/AddToKourse/AddToKourse";
import Posts from "../Kourse/Posts/Posts";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function render(title, Cmp) {
  return function ({ match }) {
    debugger;
    return <Main title={title}><Cmp match={match} /></Main>
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
            <Route path="/" exact><Redirect to="/allKourses" /></Route>
            <Route path="/allKourses" render={render('All Kourse', AllKourse)} />
            <Route path="/addNewKourse" component={AddNewKourse}/>
            <Route path="/addToKourse" component={AddToKourse} />
            <Route path="/posts" component={Posts} />
            <Route path="/register" component={Register} />
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
