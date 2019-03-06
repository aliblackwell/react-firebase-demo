import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../logo.svg';

const NavBar = (props) => {
    return(
 
        <nav class="uk-navbar-container uk-margin" data-uk-navbar>
    <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#"><img src={logo} className="App-logo" alt="logo" /></a>

        <ul class="uk-navbar-nav">
            <li><NavLink to="/"><span class="uk-icon uk-margin-small-right" data-uk-icon="icon: star"></span>
Home</NavLink></li>
            <li><NavLink to="/add-task">Add a task</NavLink></li>
        </ul>

        <div class="uk-navbar-item">
            <div>Some <a href="#">Link</a></div>
        </div>

        <div class="uk-navbar-item">
            <form action="javascript:void(0)">
                <input class="uk-input uk-form-width-small" type="text" placeholder="Input" />
                <button class="uk-button uk-button-default">Button</button>
            </form>
        </div>

    </div>
</nav>
    )
}

export default NavBar;