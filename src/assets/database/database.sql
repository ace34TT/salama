CREATE TABLE "Etablissement" (
    "idEtablissement" varchar PRIMARY KEY,
    "nom" varchar,
    "adresse" varchar,
    "longitude" float,
    "latitude" float,
    "mail" varchar,
    "type" varchar
);
CREATE TABLE "Type" (
    "idType" varchar PRIMARY KEY,
    "typeEtablissement" varchar
);
CREATE TABLE "Numero" (
    "num" varchar PRIMARY KEY,
    "idEtablissement" varchar
);
CREATE TABLE "Specialite" (
    "idSpecialite" varchar PRIMARY KEY,
    "nom" varchar
);
CREATE TABLE "SpecialiteCabinet" (
    "idCabinet" varchar,
    "idSpecialite" varchar
);
CREATE TABLE "Personne" (
    "idPersonne" varchar PRIMARY KEY,
    "nom" varchar,
    "prenom" varchar,
    "motDePasse" varchar,
    "dateDeNaissance" date,
    "sexe" char,
    "mail" varchar,
    "adresse" varchar
);
CREATE TABLE "Abonnement" (
    "idAbonnement" varchar PRIMARY KEY,
    "idPersonne" varchar,
    "debut" date
);
CREATE TABLE "Reservation" (
    "idReservation" SERIAL PRIMARY KEY,
    "idPersonne" varchar,
    "idEtablissement" varchar,
    "dateHeure" timestamp,
    "dateHeureConfirmation" timestamp,
    "type" varchar
);
CREATE TABLE "Recue" (
    "idRecue" int PRIMARY KEY,
    "idReservation" int,
    "dateHeure" timestamp,
    "cout" int
);
ALTER TABLE "Numero"
ADD FOREIGN KEY ("idEtablissement") REFERENCES "Etablissement" ("idEtablissement");
ALTER TABLE "SpecialiteCabinet"
ADD FOREIGN KEY ("idCabinet") REFERENCES "Etablissement" ("idEtablissement");
ALTER TABLE "Etablissement"
ADD FOREIGN KEY ("type") REFERENCES "Type" ("idType");
ALTER TABLE "SpecialiteCabinet"
ADD FOREIGN KEY ("idSpecialite") REFERENCES "Specialite" ("idSpecialite");
ALTER TABLE "Reservation"
ADD FOREIGN KEY ("idPersonne") REFERENCES "Personne" ("idPersonne");
ALTER TABLE "Reservation"
ADD FOREIGN KEY ("idEtablissement") REFERENCES "Etablissement" ("idEtablissement");
ALTER TABLE "Recue"
ADD FOREIGN KEY ("idReservation") REFERENCES "Reservation" ("idReservation");
ALTER TABLE "Abonnement"
ADD FOREIGN KEY ("idPersonne") REFERENCES "Personne" ("idPersonne");