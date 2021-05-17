import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { LandingPage } from './components/LandingPage'
import { Layout } from './components/Layout';
import { NoMatch } from './NoMatch';
import styled from 'styled-components';
import { ShowDetails } from './components/ShowDetails';

const Styles = styled.div`
  background-color: #090f1f;
`;

function App() {
  return(
    <Styles>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/showdetails" component={ShowDetails} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </Styles>
  );
}

export default App;
