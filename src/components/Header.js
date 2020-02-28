import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import WelcomePage from './WelcomePage'
import CharacterList from './CharacterList'
import LocationsList from './LocationsList'
import EpisodeList from './EpisodeList'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';



export default function Header() {

  return (


    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >Rick &amp; Morty Fan Page</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
             <Link to='/'> Home </Link>
            </NavItem>
            <NavItem>
              <Link to='/characters'> Characters </Link>
            </NavItem>   
            <NavItem>
              <Link to='/locations'> Locations </Link>
            </NavItem>  
            <NavItem>
              <Link to='/episodes'> Episodes </Link>
            </NavItem>  
          </Nav>
          
      </Navbar>
      <Switch>
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
        <Route path='/' component={WelcomePage} />

        </Switch>
    </div>



  );
}
