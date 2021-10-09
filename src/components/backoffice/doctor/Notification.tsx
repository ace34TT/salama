import React from 'react'

import DoctorTable from '../admin/DoctorTable'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import HSNotification from './HSNotification';
import OPNotification from './OPNotification';

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
                        <HSNotification />
                        <HSNotification />
                        <HSNotification />
                        <HSNotification />
                    </TabPanel>
                    <TabPanel value="2">
                        <h1>Demande de rendez-vous</h1>
                        <OPNotification />
                    </TabPanel>
                </TabContext>
            </Box>
        </div >
    )
}

