import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ListIcon from '@mui/icons-material/List';
import Badge from '@mui/material/Badge';

import Dashboard from './Dashboard';
import Notification from './Notification';
import { useHistory } from 'react-router';
import { ClientLists } from './ClientLIst';
import { OnshotGetNotification, RecurentGetNotification } from '../../../Services/getNotification';

export interface INotifData {
    id: {
        max: number
    },
    information: {
        adresse: string,
        dateDeNaissance: Date
        dateHeure: Date
        dateHeureConfirmation: Date
        idEtablissement: string
        idPersonne: string
        idReservation: number
        mail: string
        motDePasse: string
        nom: string
        prenom: string
        sexe: string
        type: string
    }
}

const drawerWidth = 240;

interface Props {
    window?: () => Window;
}


export default function ResponsiveDrawer(props: Props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [curentPageContent, setCurentPageContent] = React.useState(0);
    const notifData = React.useRef({ oldId: -1, newId: -1 })
    const [haveNotif, setHaveNotif] = React.useState(false)

    const history = useHistory()

    const curentNotifData = notifData.current


    React.useEffect(() => {
        const handleDataChange = (newData: INotifData) => {
            curentNotifData.newId = newData.id.max
            if (curentNotifData.oldId !== curentNotifData.newId && !haveNotif) setHaveNotif(true)
        }

        OnshotGetNotification("appointment/lastId/e1").then((data) => {
            if (data && data.id) {
                curentNotifData.newId = data.id.max
                curentNotifData.oldId = data.id.max
                setTimeout(() => {
                    RecurentGetNotification("appointment/lastId/e1", handleDataChange)
                }, 3000)
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dashboardLink: any[] = [
        {
            name: "Dashboard",
            url: "doctor/dashboard",
            oc: () => { setCurentPageContent(0) },
            icon: <DashboardIcon />
        }
    ]

    const doctorLink: any[] = [
        {
            name: "Demandes",
            url: "admin/doctor/request",
            oc: () => { setCurentPageContent(1) },
            icon: <AllInboxIcon />
        }
    ]

    const customerLink: any[] = [
        {
            name: "Clients",
            url: "admin/custormer",
            oc: () => { setCurentPageContent(2) },
            icon: <FormatListBulletedIcon />
        }
    ]

    const adminLink: any[] = [
        {
            name: "Logout",
            url: "admin/logout",
            oc: () => { history.push("/doctor/login") },
            icon: <LogoutIcon />
        }
    ]

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {dashboardLink.map((navItem) => (

                    <ListItem onClick={navItem.oc} button key={navItem.name}>
                        <ListItemIcon>
                            {navItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={navItem.name} />
                    </ListItem>

                ))}
            </List>
            <Divider />
            <List>
                {doctorLink.map((navItem) => (
                    <ListItem onClick={navItem.oc} button key={navItem.name}>
                        <ListItemIcon>
                            {navItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={navItem.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {customerLink.map((navItem) => (
                    <ListItem onClick={navItem.oc} button key={navItem.name}>
                        <ListItemIcon>
                            {navItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={navItem.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {adminLink.map((navItem) => (
                    <ListItem onClick={navItem.oc} button key={navItem.name}>
                        <ListItemIcon>
                            {navItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={navItem.name} />
                    </ListItem>
                ))}
            </List>
        </div >
    );

    const contentSwitcher = [
        <Dashboard />,
        <Notification />,
        <ClientLists />
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flex: 1, textAlign: "start" }} variant="h6" noWrap component="div">
                        Espace Docteur
                    </Typography>
                    <IconButton onClick={() => { setCurentPageContent(1); curentNotifData.oldId = curentNotifData.newId; setHaveNotif(false) }} style={{ marginRight: 16 }} component="span">
                        {haveNotif && <Badge badgeContent={1} color="error">
                            <ListIcon style={{ color: "#fff" }} />
                        </Badge>}
                        {!haveNotif && <ListIcon style={{ color: "#fff" }} />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {contentSwitcher[curentPageContent]}
            </Box>
        </Box>
    );
}