import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        margin: 'auto',
        background: '#000',
        maxWidth: '600',  
        color: '#11d993',
        padding: 14
    },
    colorText : {
        color: '#11d993'
    },
    title: {
        fontSize: '2.5rem'
    },
    container: {
        textAlign: 'center',
        color: '#fff',
        margin: '100px'
    },
    goDown: {
        color: '#11d993',
        fontSize: '4rem'
    },
    btn:{
        color: '#11d993',
        background: '#000'
    },
    link: {
        textDecoration: 'none'
    },
    p: {
        color: '#11d993',
    }
}));

export default function Home() {
    const classes = useStyles();
    const [ checked, setChecked ] = useState(false)

    useEffect(() => {
      setChecked(true)
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Collapse 
                in={checked}
                { ... (checked ? {timeout: 2000}: {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> NEO<span className={classes.colorText}>CODEPEN .</span>
                    </h1>

                    <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.p} >
                        This is a codepen clone called neocodepen developed by [github] you can use it to practice your html, css, javascript and even markdown
                    </Typography>

                    <Grid container spacing={3} justify="center">
                        <Grid item>
                            <Link to="/codepen" className={classes.link}>
                                <Button variant="outlined" color="primary" className={classes.btn}>
                                    codepen
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link to="/markdown" className={classes.link}>
                                <Button variant="outlined" color="primary" className={classes.btn}>
                                    Markdown
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Collapse>
        </div>
    )
}


