import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loader from "./Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Kourse from "../Kourses/Kourse";

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
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className="Container">
          
          <Switch>
            <Route path="/" exact><Redirect to="/kourse" /></Route>
            <Route path="/kourse" render={render('Kourse', Kourse)} />
            {/* <Route path="/post/:id" render={render('Posts', Detail)} />
            <Route path="/create-posts">
              <Main title="Create Post"><CreatePost /></Main>
            </Route>
            <Route path="/profile">
              <Main title="Profile">
                <React.Suspense fallback={<Loader isLoading={true} />}>
                  <Profile></Profile>
                </React.Suspense>
              </Main>
            </Route> */}
           {/*  <Route path="/login">
              <Main title="Login"><Login /></Main>
            </Route>
            <Route path="/register">
              <Main title="Register"><Register /></Main>
            </Route>
            <Route path="*">
              <Main title="Not Found"><NotFound /></Main>
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
 

export default App;
