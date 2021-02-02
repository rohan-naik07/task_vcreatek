import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Container} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  footer: {
    display : 'flex',
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    width: '100%',
    bottom: 0,
  },
  grow: {
      flexGrow: 1,
  },
  container : {
    display : 'flex',
    justify : 'space-between'
  },
  info : {
    display : 'flex',
    padding: 10
  }
}));

const Footer=props=>{
  const classes = useStyles();
  const icons=[
   <InstagramIcon fontSize='large' color='primary'/>,
   <FacebookIcon fontSize='large' color='primary'/>,
    <LinkedInIcon fontSize='large' color='primary'/>
  ]
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <Typography variant="h6" gutterBottom>
            Times News Pvt. Ltd.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
          Central News Agency Private Limited 
          23/90 Connaught Circus
          Post Box No 374
          New Delhi 110001 - India
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
          +917798923219
          </Typography>
        </div>
        <div className={classes.grow} />
        <div className={classes.info}>
          {icons.map(icon=>(
            <IconButton color="primary">
              {icon}
            </IconButton>))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;