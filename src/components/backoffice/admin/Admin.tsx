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


// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Dashboard from './Dashboard'
import Doctor, { EDoctorType } from './Doctor';
import { useHistory } from 'react-router';

const drawerWidth = 240;

interface Props {
    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [curentPageContent, setCurentPageContent] = React.useState(0);
    const history = useHistory()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dashboardLink: any[] = [
        {
            // liste nouveaux docteur et patient
            name: "Dashboard",
            url: "admin/doctors",
            oc: () => { setCurentPageContent(0) },
            icon: <DashboardIcon />
        }
    ]

    const doctorLink: any[] = [
        {
            name: "Doctors",
            url: "admin/doctors/list",
            oc: () => { setCurentPageContent(1) },
            icon: <FormatListBulletedIcon />
        },
        {
            name: "Request",
            url: "admin/doctor/request",
            oc: () => { setCurentPageContent(2) },
            icon: <AllInboxIcon />
        }
    ]

    const customerLink: any[] = [
        {
            name: "Customer",
            url: "admin/custormer",
            oc: () => { setCurentPageContent(3) },
            icon: <FormatListBulletedIcon />
        }
    ]

    const adminLink: any[] = [
        {
            name: "Logout",
            url: "admin/logout",
            oc: () => { history.push("/admin/login") },
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

    // const container = window !== undefined ? () => window().document.body : undefined;

    const contentSwitcher = [
        <Dashboard />,
        <Doctor type={EDoctorType.doctor} />,
        <Doctor type={EDoctorType.request} />,
        <Doctor type={EDoctorType.customer} />
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
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
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