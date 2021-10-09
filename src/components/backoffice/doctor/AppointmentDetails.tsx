import React from 'react'
import Button from "@mui/material/Button";

export default function AppointmentDetails() {
    return (
        <div className="container">
            <h1>Information sur le patient</h1>
            <div className="row">
                <div className="col-lg-6">
                    Nom :
                    Prenom :
                    Date de naissance :
                    Age :
                    Addresse :
                    Sexe :
                </div>
                <div className="col-lg-6">
                    Lieu :
                    Date :
                    Heure :
                </div>
                <div className="offset-5">
                    <Button variant="outlined">Outlined</Button>
                </div>
            </div>
        </div>
    )
}

