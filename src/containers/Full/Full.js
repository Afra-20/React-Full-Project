import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Calendar from 'react-calendar';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Portfolio from '../../views/Portfolio/';
import Enigma from '../../views/Enigma/';
import Upload from '../../views/Upload/';
import Queries from '../../views/Queries/';
import Tweetup from '../../views/Tweetup/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb/>
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/Enigma" name="Enigma" component={Enigma}/>
                <Route path="/Portfolio" name="Portfolio" component={Portfolio}/>
                <Route path="/Upload" name="Upload" component={Upload}/>
                <Route path="/Queries" name="Queries" component={Queries}/>
                <Route path="/Tweetup" name="Tweetup" component={Tweetup}/>
                
                
                </Switch>
            </Container>
          </main>
          <Aside/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;
