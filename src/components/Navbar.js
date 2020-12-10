import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginBottom: '56px',
        width:'6%',
      flexGrow: 1,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        background: '#1e211f',
        color: '#11d993'
    },
    links: {
        '& > *': {
            margin: theme.spacing(1),
        },
        
    },
    link: {
        color: '#11d993',
        textDecoration: 'none'
    }
}));


const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Link to="/" className={classes.link}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            className={classes.menuButton}
                        >
                            <HomeIcon />                   
                        </IconButton>
                    </Link>

                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Neo Codepen
                    </Typography>

                    <div className={classes.links}>
                        <Link to="/markdown" className={classes.link}>
                            <Button  color="primary" className={classes.link}>md</Button>
                        </Link>

                        <Link to="/codepen" className={classes.link}>
                            <Button color="primary" className={classes.link} >CodePen</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;