import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Redirect } from 'react-router-dom'
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [redirect, setRedirect] = React.useState(false);
    const [redirectLocation, setRedirectLocation] = React.useState("");
    function handleSettingsOpen() {
        setRedirectLocation("/settings")
        setRedirect(true);
    }
    function handleHomeOpen(event){
        event.preventDefault();
        setRedirectLocation("/")
        setRedirect(true);
    }
    return (
        <div className={classes.grow}>
            {(()=>{
                if (redirect) {
                    // setRedirect(false);
                   return <Redirect to={redirectLocation}></Redirect>
                }
            })()}
            <AppBar position="static">
                <Toolbar>
                    <Link className={classes.title} color="inherit" variant="h5" onClick={handleHomeOpen} noWrap>
                        Weather
                    </Link>
                    <div className={classes.grow} />
                    <IconButton
                        onClick={handleSettingsOpen}
                        color="inherit"
                    >
                        <Icon>settings</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
