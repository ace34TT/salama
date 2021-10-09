import React, { Component } from 'react'
import '../../styles/frontoffice/team.css'
import '../../styles/frontoffice/team-card.css'
import TeamCard from './TeamCard'

export class Team extends Component {
    render() {
        return (
            <div className="container-fluid team-container">
                <h1>Our Team</h1>
                <div className="container">
                    <p className="col-lg-10" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus in corrupti eos alias soluta dolor possimus veniam iure sunt excepturi, suscipit ea non libero dolore nobis, culpa facilis quas.</p>
                </div>
                <div className="container-fluid">
                    <div className="row -flex justify-content-around">
                        <TeamCard name="Tafinasoa" post="designer / integrateur" />
                        <TeamCard name="Tafinasoa" post="designer / integrateur" />
                        <TeamCard name="Tafinasoa" post="designer / integrateur" />
                        <TeamCard name="Tafinasoa" post="designer / integrateur" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Team
