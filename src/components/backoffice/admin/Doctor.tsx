import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider, IconButton, Modal, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core';
import { DEFAULT_CUS_LIST, DEFAULT_DOC_LIST, DEFAULT_DOC_REQ } from '../../../Static/Data';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
    elementStyle: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 8
    },
    stickyElement: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 8,
        position: "sticky",
        top: 64,
        backgroundColor: "#fff",
        zIndex: 100,
    },
    modalContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
}))

export enum EDoctorType {
    doctor, request, customer
}

export enum EDoctorState {
    actif, inactif, suspended
}

export enum EDoctorReqState {
    nostate, aproved, declined
}

export enum ECustomerState {
    actif, inactif
}

interface IDefaultDItem {
    id: number,
    name: string,
    contact: string,
    dateDinscription: string,
}

export interface IDoctorListItem extends IDefaultDItem {
    state: EDoctorState
}

export interface IDoctorReqListItem extends IDefaultDItem {
    state: EDoctorReqState
}

export interface ICustomerListItem extends IDefaultDItem {
    state: ECustomerState
}

export const AdminDefaultItem = (props: {
    isTitle?: boolean
    datas?: any[]
}) => {
    const classes = useStyles()
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-around" className={props.isTitle ? classes.stickyElement : classes.elementStyle}>
            {props.datas && <>{props.datas.map((t) => (
                <Box flex={1}>
                    {props.isTitle && <p style={{ fontWeight: "bold", margin: 0 }}>{t}</p>}
                    {!props.isTitle && <div style={{ color: "#999" }}>{t}</div>}
                </Box>
            ))}</>}
        </Stack>
    )
}

export const UserDetailModalContent = (props: {
    data: IDefaultDItem | null
    onCancel: () => void
}) => {
    const [mode, setMode] = React.useState(false);
    const user = props.data;

    return (user ?
        <Paper elevation={3} style={{ padding: 16 }}>
            <h3>Details de l'utilisateur N°: {user.id}</h3>
            <Divider style={{ marginTop: 8, marginBottom: 8 }} />
            <Stack direction="column" spacing={2}>
                <TextField value={user.name} disabled={!mode} fullWidth id="standard-basic201" label="Nom" variant="standard" />
                <TextField value={"Test Prenom"} disabled={!mode} fullWidth id="standard-basic202" label="Prenom" variant="standard" />
                <TextField value={"Test Adress"} disabled={!mode} fullWidth id="standard-basic203" label="Adress" variant="standard" />
                <Stack direction="row">
                    <TextField value={"01/01/1993"} disabled={!mode} fullWidth id="standard-basic204" label="Date de naissance" variant="standard" />
                    <TextField value={"Test Lieu"} disabled={!mode} fullWidth id="standard-basic205" label="Lieu de naissance" variant="standard" />
                </Stack>
                <TextField value={"test@example.com"} disabled={!mode} fullWidth id="standard-basic206" label="Email" variant="standard" />
                <TextField value={user.contact} disabled={!mode} fullWidth id="standard-basic207" label="Contact" variant="standard" />
                <Stack direction="row" alignContent="center" justifyContent="space-around">
                    <Button onClick={props.onCancel} color="error" variant="contained" disableElevation>
                        Annuler
                    </Button>
                    {mode && <Button onClick={props.onCancel} variant="contained" disableElevation>
                        Enregistrer
                    </Button>}
                    {!mode && <Button onClick={() => { setMode(true) }} variant="contained" disableElevation>
                        Modifier
                    </Button>}
                </Stack>
            </Stack>
        </Paper> :
        null
    )
}

export default function Doctor(props: {
    type: EDoctorType
}) {
    const [value, setValue] = React.useState('1');
    const [showDetails, setShowDetails] = React.useState(false);
    const [curentDetailsData, setCurentDetailData] = React.useState<IDefaultDItem | null>(null);
    const [docLIst, setDocList] = React.useState<IDoctorListItem[]>([])
    const [cusList, setCusList] = React.useState<ICustomerListItem[]>([])
    const [docReqList, setDocReqList] = React.useState<IDoctorReqListItem[]>([])

    const classes = useStyles()

    React.useEffect(() => {
        if (props.type === EDoctorType.doctor) setDocList([...DEFAULT_DOC_LIST])
        if (props.type === EDoctorType.customer) setCusList([...DEFAULT_CUS_LIST])
        if (props.type === EDoctorType.request) setDocReqList([...DEFAULT_DOC_REQ])
    }, [props.type])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const TabLabelsI = [
        "Actif",
        "Tous",
        "Tous",
    ]
    const TabLabelsII = [
        "Inactif",
        "Aprouvé",
        "Actif",
    ]
    const TabLabelsIII = [
        "Suspendue",
        "Décliné",
        "Inactif",
    ]

    const Titre = [
        "Liste des docteur", "Liste des requetes", "Liste des client"
    ]

    const TableTitle = [
        <AdminDefaultItem isTitle datas={["Nom", "Contact", "Date d'inscription", "Operation", "Action"]} />,
        <AdminDefaultItem isTitle datas={["Nom", "Contact", "Action"]} />,
        <AdminDefaultItem isTitle datas={["Nom", "Contact", "Date d'inscription", "Operation", "Action"]} />
    ]


    const getLIst = (type: EDoctorType, tab: number) => {
        if (type === EDoctorType.doctor) {
            if (tab === 0) return docLIst.filter((d) => d.state === EDoctorState.actif)
            if (tab === 1) return docLIst.filter((d) => d.state === EDoctorState.inactif)
            if (tab === 2) return docLIst.filter((d) => d.state === EDoctorState.suspended)
        }
        else if (type === EDoctorType.customer) {
            if (tab === 0) return cusList
            if (tab === 1) return cusList.filter((d) => d.state === ECustomerState.actif)
            if (tab === 2) return cusList.filter((d) => d.state === ECustomerState.inactif)
        }
        else if (type === EDoctorType.request) {
            if (tab === 0) return docReqList
            if (tab === 1) return docReqList.filter((d) => d.state === EDoctorReqState.aproved)
            if (tab === 2) return docReqList.filter((d) => d.state === EDoctorReqState.declined)
        }
        else return []
        return []
    }

    const ContentLIst = (tab: number) => [
        getLIst(props.type, tab).map((itm) => (
            <AdminDefaultItem datas={[
                itm.name, itm.contact, itm.dateDinscription,
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                    <IconButton onClick={() => { setCurentDetailData(itm); setShowDetails(true) }} color="primary" >
                        <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                    <IconButton color="error" >
                        <DeleteIcon />
                    </IconButton>
                </Stack>,
                <>
                    {itm.state === EDoctorState.actif && <Button color="warning" variant="outlined">Desactiver</Button>}
                    {itm.state === EDoctorState.inactif && <Button color="warning" variant="outlined">Suspendre</Button>}
                    {itm.state === EDoctorState.suspended && <Button color="error" variant="outlined">Suprimer</Button>}
                </>
            ]} />
        )),
        getLIst(props.type, tab).map((itm) => (
            <AdminDefaultItem datas={[
                itm.name, itm.contact,
                <>
                    {(itm.state === EDoctorReqState.aproved || itm.state === EDoctorReqState.declined) ? <div></div> :
                        <Stack alignItems="center" justifyContent="center" direction="row" spacing={1}>
                            <Button color="primary" variant="outlined">Aprouver</Button>
                            <Button color="error" variant="outlined">Decliner</Button>
                        </Stack>}
                </>
            ]} />
        )),
        getLIst(props.type, tab).map((itm) => (
            <AdminDefaultItem datas={[
                itm.name, itm.contact, itm.dateDinscription,
                <Stack alignItems="center" justifyContent="center" direction="row" spacing={1}>
                    <IconButton onClick={() => { setCurentDetailData(itm); setShowDetails(true) }} color="primary" >
                        <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                    <IconButton color="error" >
                        <DeleteIcon />
                    </IconButton>
                </Stack>,
                <>
                    {itm.state === ECustomerState.actif && <Button color="warning" variant="outlined">Desactiver</Button>}
                    {itm.state === ECustomerState.inactif && <Button color="error" variant="outlined">Suprimer</Button>}
                </>
            ]} />
        ))
    ]

    return (
        <div className="container-fluid">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={TabLabelsI[props.type]} value="1" />
                            <Tab label={TabLabelsII[props.type]} value="2" />
                            <Tab label={TabLabelsIII[props.type]} value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h1>{Titre[props.type] + " " + TabLabelsI[props.type]}</h1>
                        <Divider style={{ marginBottom: 16 }} />
                        {/* <DoctorTable /> */}
                        <Paper elevation={2}>
                            {TableTitle[props.type]}
                            {ContentLIst(0)[props.type]}
                        </Paper>
                    </TabPanel>
                    <TabPanel value="2">
                        <h1>{Titre[props.type] + " " + TabLabelsII[props.type]}</h1>
                        <Divider style={{ marginBottom: 16 }} />
                        <Paper elevation={2}>
                            {TableTitle[props.type]}
                            {ContentLIst(1)[props.type]}
                        </Paper>
                    </TabPanel>
                    <TabPanel value="3">
                        <h1>{Titre[props.type] + " " + TabLabelsIII[props.type]}</h1>
                        <Divider style={{ marginBottom: 16 }} />
                        <Paper elevation={2}>
                            {TableTitle[props.type]}
                            {ContentLIst(2)[props.type]}
                        </Paper>
                    </TabPanel>
                </TabContext>
            </Box>
            <Modal

                open={showDetails}
                onClose={() => {
                    setShowDetails(false)
                }}
            >
                <div className={classes.modalContainer}>
                    <UserDetailModalContent onCancel={() => { setShowDetails(false) }} data={curentDetailsData} />
                </div>

            </Modal>
        </div>
    )
}

