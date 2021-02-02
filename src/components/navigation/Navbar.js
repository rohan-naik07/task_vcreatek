import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link,Menu,MenuItem,Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import PublicIcon from '@material-ui/icons/Public';
import Home from "../home/Home";
import Footer from '../footer/Footer'

const useStyles = makeStyles((theme)=>({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        overflowX:'auto'
    },
    space : {
        marginRight: theme.spacing(3),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
    grow: {
        flexGrow: 1,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}))

export default function Navbar(){
    const classes = useStyles();
    const menuId = 'primary-search-account-menu';
    const [open,setOpen] = React.useState(false);
    const sections = [
        { title: 'Technology', url: '#' },
        { title: 'Sports', url: '#' },
        { title: 'Culture', url: '#' },
        { title: 'Business', url: '#' },
        { title: 'Nation', url: '#' },
      ];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let width = window.screen.availWidth;
   
    
    return (
        <React.Fragment>
            <CssBaseline />
                <Toolbar variant='dense' className={classes.appBar}>
                    <PublicIcon fontSize='large' color='primary' style={{marginRight:20}}/>
                    <Typography variant='h6'>
                        Times News
                    </Typography>
                    <div className={classes.space}/>
                    {sections.map((section) => (
                        <Link
                            color='secondary'
                            noWrap
                            key={section.title}
                            variant="body1"
                            href={section.url}
                            className={classes.toolbarLink}>
                            {section.title}
                        </Link>
                    ))}
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div> 
                </Toolbar>
            <main>
                <Home/>    
            </main>
            <Footer/>
        </React.Fragment>
    )
}