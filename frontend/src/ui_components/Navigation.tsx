import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import {Link, useLocation} from "react-router-dom";


interface NavigationProps {
    page?: any,
    drawerWidth: number
}
export const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const location = useLocation();
  const path: string = location.pathname;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${props.drawerWidth}px)`, ml: `${props.drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{width: props.drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: props.drawerWidth, boxSizing: 'border-box',},}}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
         <ListItem disablePadding>
              <ListItemButton id={'button'} component={Link} to={''} selected={'' === path}>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={'Home'}/>
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
              <ListItemButton component={Link} to={'/create'} selected={'/create' === path}>
                <ListItemIcon>
                  <AddIcon/>
                </ListItemIcon>
                <ListItemText primary={'Create'}/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}