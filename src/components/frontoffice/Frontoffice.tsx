import React, { Component } from 'react'
import Showcase from './Showcase'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import { Navbar } from './Navbar'
import Doctor from '../backoffice/doctor/Doctor'

export class Frontoffice extends Component {
    render() {
        return (
            <div>
                <BrowserRouter >
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Showcase />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/doctor">
                            <Doctor />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Frontoffice
