import { IDoctorListItem, ICustomerListItem, IDoctorReqListItem } from "../components/backoffice/admin/Doctor";
import { IReuestItem } from "../components/backoffice/doctor/Notification";
export const DEFAULT_NAME = "Zaira,Sana,Gerónimo,Niillas,Lamar,Nitya,Andris,Kaija,Ismail,Éloïse,Abd al-Latif,Vidar,Buster,Hilda,Felicia".split(',');
export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const RandomName = () => {
    const nameCount = DEFAULT_NAME.length;
    return DEFAULT_NAME[randomNumber(0, nameCount - 1)]
}

export const DEFAULT_DOC_REQUEST: IReuestItem[] = [...Array(randomNumber(9, 11)).keys()].map((i) => ({
    id: i,
    name: RandomName(),
    problème: "Problème du client",
    adresse: "Address du client",
    contact: "034 00 123 45",
}))

export const DEFAULT_DOC_LIST: IDoctorListItem[] = [...Array(randomNumber(100, 150)).keys()].map((i) => ({
    id: i,
    name: RandomName(),
    contact: "034 00 123 45",
    dateDinscription: "01/04/2021",
    state: randomNumber(0, 3)
}))

export const DEFAULT_DOC_REQ: IDoctorReqListItem[] = [...Array(randomNumber(50, 75)).keys()].map((i) => ({
    id: i,
    name: RandomName(),
    contact: "034 00 123 45",
    dateDinscription: "01/04/2021",
    state: randomNumber(0, 3)
}))

export const DEFAULT_CUS_LIST: ICustomerListItem[] = [...Array(randomNumber(100, 150)).keys()].map((i) => ({
    id: i,
    name: RandomName(),
    contact: "034 00 123 45",
    dateDinscription: "01/04/2021",
    state: randomNumber(0, 2)
}))