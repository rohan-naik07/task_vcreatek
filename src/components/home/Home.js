import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,List,Paper,ListItem,Typography,TextField,Button,Card,CardMedia,CardContent,CardActions,Fade} from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {Visibility, VisibilityOff} from "@material-ui/icons";

const useStyles = makeStyles(theme=>({
    root : {
        //display : 'flex'
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    },
    itemroot : {
        display:'flex',
        width : '100%',
        height : '30%',
        direction : 'column',
        justify:'space-between',
        padding : 5
    },
    grow: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            width : 0,
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
      content: {
        flex: '1 0 auto',
    },
      cover: {
        width: '80%',
        margin : 5,
        objectFit: 'cover',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : 'white',
        overflow : 'hidden'
    }
}))

/**
 * 
 * @param {If the parent is set to display:flex and child component being loaded does 
 * not have flex:1 or flex-grow:1 then it will not take up 100% width of the parent.} props 
 */

const Home=props=>{
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
    }
    const items=[
        {
            title : 'California researchers test everybody in one town for coronavirus',
            image:'https://s3.reutersmedia.net/resources/r/?m=02&d=20200421&t=2&i=1515823617&w=1200&r=LYNXMPEG3K05Q',
            description : 'Researchers began testing an entire town in northern California for the novel coronavirus and its antibodies on Monday, one of the first such efforts since the pandemic hit the United States.'
        },
        {
            title : '80% asymptomatic cases deepens COVID-19 concerns in India',
            image:'https://mk0bfsieletsonlt96u6.kinstacdn.com/wp-content/uploads/2020/04/80-asymptomatic-cases-deepens-COVID-19-concerns-in-India.jpg',
            description : 'With inflating number of asymptomatic Covid-19 cases responsible for spreading the infection, Indias top medical research body is struggling'
        },
        {
            title : 'How AC air spread coronavirus at a restaurant in China',
            image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/2020-04-17T083537Z_1806127465_-647x363.png?0i9XlAO9vhGwC.SPKmavPVrqeVxPRur0',
            description : "A family that arrived in China's Guangzhou from Wuhan spread the virus to two other families while dining at a restaurant. The virus transmission happened through the AC airflow."
        },
        {
            title : 'Coronavirus antibody testing  outbreak is up to 55 times bigger ',
            image:'https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg',
            description : 'he results are based on antibody testing of about 863 people who were representative of LA County'
        }
        
    ]

    return(
        <div className={classes.root}>
                <Fade in={true} timeout={2000}>
                        <Paper elevation={2} style={{padding : 30,margin:20, height:'50vh',overflow:'auto'}}>
                            <Typography variant='caption'>
                                The user can login into this portal if they have officially registered.
                            </Typography>
                            <TextField
                                id="name"
                                variant="outlined"
                                label="User Name"
                                type="text"
                                name="email"
                                margin="normal"
                                onChange={handleChange}
                                fullWidth
                                autoFocus
                                required
                            />
                            <TextField
                                id="email"
                                variant="outlined"
                                label="Email Address"
                                type="email"
                                name="email"
                                margin="normal"
                                onChange={handleChange}
                                fullWidth
                                autoFocus
                                required
                            />
                            <TextField
                                id="password"
                                variant="outlined"
                                label="Password"
                                margin="normal"
                                name="password"
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment:
                                    <IconButton
                                        aria-label="Toggle visibility"
                                        onClick={() => setVisible(!visible)}
                                    >
                                        {visible? <Visibility /> : <VisibilityOff /> }
                                    </IconButton>
                                }}
                                fullWidth
                                autoFocus
                                required
                            />
                            <Button color="primary" variant="contained" style={{width:'100%',marginTop:10}}>
                                Login
                            </Button>
                        </Paper>
                </Fade>
                <Fade in={true} timeout={2000}>
                        <Paper elevation={1} style={{maxHeight:'100%',backgroundColor: 'transparent'}}>
                        <List fullWidth>
                            {items.map(item=>(
                                <ListItem>
                                    <Card className={classes.itemroot}>
                                        <CardMedia
                                            className={classes.cover}
                                            image={item.image}
                                            title="Live from space album cover"/>
                                        <CardContent className={classes.details}>
                                            <Typography component="h6" variant="h6">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle5" color="textSecondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.grow} />
                                        <CardActions>
                                            <IconButton color='primary'>
                                                <ThumbUpAltIcon/>
                                            </IconButton>   
                                        </CardActions>
                                    </Card>
                                </ListItem>    
                            ))}  
                            </List>
                        </Paper>
                </Fade>  
        </div>
    )
}

export default Home;
