import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// eslint-disable-next-line no-unused-vars
class Header extends Component {
  render() {
    return (
            <AppBar position="static" style={{flexGrow: 1}}>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{marginRight: 2}} >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5" style={{flexGrow: 1}} >
                    Teste barra inicial
                </Typography>
              </Toolbar>
            </AppBar>
          
          );
  }
}

export default Header;