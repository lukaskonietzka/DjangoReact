import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import {Link, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';


interface NavigationProps {
    position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',

}

export const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    const location = useLocation();
    const path: string = location.pathname;

    return (
        <AppBar position={props.position} style={{backgroundColor: '#acf6c8', color: '#282c34'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Green Assistent
                </Typography>
                <Button
                    title={'Home'}
                    color="inherit"
                    component={Link}
                    to="/">
                        <HomeIcon/>
                </Button>
                <Button
                    title={'Create'}
                    color="inherit"
                    component={Link}
                    to="/create">
                        <AddIcon/>
                </Button>
                <Button
                    title={'About'}
                    color="inherit"
                    component={Link}
                    to="/contact">
                        <InfoIcon/>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

