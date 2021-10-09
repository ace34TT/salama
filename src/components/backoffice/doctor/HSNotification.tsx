import Button from "@mui/material/Button";

export default function HSNotification() {

    // "idReservation" SERIAL PRIMARY KEY,
    // "idPersonne" varchar,
    // "idEtablissement" varchar,
    // "dateHeure" timestamp,
    // "dateHeureConfirmation" timestamp,
    // "type" varchar
    // Information sur l'utilisateur
    //      Nom / Prenom / Age / Sexe / Contact 
    // Information sur le RDV 
    //      Date / Heure / Lieux / position geographique 

    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="container">
                <div className="row ">
                    <h3 className="ms-auto"><strong>Nom : du client</strong></h3>
                </div>

                <div className="row">
                    <div className="ms-auto">
                        <Button variant="outlined">Confirmer</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
