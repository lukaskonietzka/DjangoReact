import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {Link, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";


interface NavigationProps {
    position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',

}

export const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    const location = useLocation();
    const path: string = location.pathname;

    return (
        <AppBar position={props.position} style={{backgroundColor: '#8FBC8F', color: '#282c34'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/">
                            <SmartToyIcon/>Green Assistant
                    </Button>
                </Typography>
                <Tooltip title={'Home'} arrow>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/">
                            <HomeIcon/>
                    </Button>
                </Tooltip>
                <Tooltip title={'Create'} arrow>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/create">
                            <AddIcon/>
                    </Button>
                </Tooltip>
                <Tooltip title={'About'} arrow>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact">
                            <InfoIcon/>
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

