import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-awesome-slider/dist/styles.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Services from './components/services/Services';
import Footer from './components/layout/Footer';
import Portfolios from './components/portfolio/Portfolios';
import Contact from './components/contact/Contact';
import Company from './components/company/Company';
import ServiceForm from './components/administration/services/ServiceForm';
import PortfolioForm from './components/administration/portfolios/PorfolioForm';
import Projects from './components/administration/projects/Projects';
import Spinner from './components/animations/Spinner';
import Singleservice from './components/services/Singleservice';
import Singleportfolio from './components/portfolio/Singleportfolio';
import Singlepro from './components/administration/projects/Singlepro';
import Loging from './components/administration/Athentication/Loging';
// import Signup from './components/administration/Athentication/Signup';
// import SinglePage from './components/layout/SinglePage';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/administration/private/PrivateRoute';
const App = () => {
  return (
    <div className='main'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/services' component={Services} />
          <Route path='/portfolios' component={Portfolios} />
          <Route path='/contact' component={Contact} />
          <Route path='/company' component={Company} />
          <Route path='/admin/loging' component={Loging} />
          <PrivateRoute path='/admin/serviceform' component={ServiceForm} />
          <PrivateRoute path='/admin/portfolioform' component={PortfolioForm} />
          <PrivateRoute path='/api/projects/:id' component={Singlepro} />
          <PrivateRoute path='/admin/projects' component={Projects} />
          {/* <Route path='/admin/signup' component={Signup} /> */}
          {/* <Route path='/single' component={SinglePage} /> */}
          <Route path='/api/services/:id' component={Singleservice} />
          <Route path='/api/portfolios/:id' component={Singleportfolio} />
          <Route component={NotFound} />
          <Spinner />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};
export default App;
