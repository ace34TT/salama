import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// import HSNotification from './HSNotification';
// import OPNotification from './OPNotification';
import { Divider, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Button from "@mui/material/Button";
import { DEFAULT_DOC_REQUEST } from '../../../Static/Data';

export interface IReuestItem {
    id: number;
    name: string;
    problème?: string;
    adresse: string;
    contact: string;
}

const useStyles = makeStyles((theme) => ({
    paparItem: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemTile: {
        fontWeight: "bold",
    }
}))

export const RequestItem = (props: {
    request: IReuestItem,
    onConfirm: (reqId: number) => void,
    isRdv?: boolean,
    isClist?: boolean,
}) => {
    const classes = useStyles();
    const request = props.request
    return (
        <Paper className={classes.paparItem} variant="outlined" >
            <Stack alignItems="flex-start" direction="column" spacing={1} flex={1}>
                <p><span className={classes.itemTile}>Nom: </span>{request.name}</p>
                <p><span className={classes.itemTile}>{props.isRdv ? "Motif: " : "Problème: "}</span>{request.problème}</p>
                <p><span className={classes.itemTile}>Addresse: </span>{request.adresse}</p>
                <p><span className={classes.itemTile}>Contact: </span>{request.contact}</p>
            </Stack>
            {(props.isRdv || props.isClist) && <Stack alignItems="flex-start" direction="column" spacing={1} flex={1}>
                <p><span className={classes.itemTile}>{props.isClist ? "Date: " : "Date de RDV: "}</span>{"10/10/2021"}</p>
                <p><span className={classes.itemTile}>{props.isClist ? "Heure: " : "Heur de RDV: "}</span>{"15 h"}</p>
            </Stack>}
            <Stack direction="column" spacing={1}>
                {!props.isClist && <Button onClick={() => props.onConfirm(request.id)} variant="outlined">Confirmer</Button>}
                {!props.isClist && props.isRdv && <Button color="warning" onClick={() => props.onConfirm(request.id)} variant="outlined">Reporter</Button>}
                {!props.isClist && <Button color="error" onClick={() => props.onConfirm(request.id)} variant="outlined">Decliner</Button>}
                {props.isClist && <Button color="error" onClick={() => props.onConfirm(request.id)} variant="outlined">Suprimer</Button>}
            </Stack>
        </Paper>
    )
}

export default function Notification() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="container-fluid">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Urgence" value="1" />
                            <Tab label="Sur RDV" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h1>Demande d'urgence</h1>
                        <Divider style={{ marginBottom: 16 }} />
                        {DEFAULT_DOC_REQUEST.map((item) => (
                            <RequestItem request={item} onConfirm={(id) => {/** */ }} />
                        ))}
                        {/* <HSNotification />
                        <HSNotification />
                        <HSNotification />
                        <HSNotification /> */}
                    </TabPanel>
                    <TabPanel value="2">
                        <h1>Demande de rendez-vous</h1>
                        <Divider style={{ marginBottom: 16 }} />
                        {DEFAULT_DOC_REQUEST.map((item) => (
                            <RequestItem isRdv request={item} onConfirm={(id) => {/** */ }} />
                        ))}
                        {/* <OPNotification /> */}
                    </TabPanel>
                </TabContext>
            </Box>
        </div >
    )
}

