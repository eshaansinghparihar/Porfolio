import React from 'react';
import './App.css';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from "@material-ui/core/styles";
import { green,blue ,red } from '@material-ui/core/colors';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Button,CssBaseline,Paper,CardContent,Typography,} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    card: {
      marginTop: theme.spacing(2),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
    submit: {
        marginTop: theme.spacing(2),
        width: "15%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
      submitbutton: {
        marginTop: theme.spacing(2),
        width: "35%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
  }));
function Home() {
  const classes = useStyles();
  return (
    <div className="App">
       <CssBaseline />
        <Paper
          item
          alignContent="center"
          spacing={2}
          elevation={8}
          className={classes.card}
        >
          <CardContent>
          <Typography variant="h5" component="h4">
            Hey ! I'm
            </Typography>
            <Typography variant="h4" component="h5">
             Eshan Singh Parihar
            </Typography>
            <br/>
            <Typography variant="h5" component="h4">
            I'm familiar with
            </Typography>
            <Typography variant="h4" component="h5">
            ReactJS | ReactNative | Nodejs | Express | MongoDB | JavaScript | HTML | CSS | Git | Github
            </Typography>
          </CardContent>
        </Paper>

        <Paper
          item
          alignContent="center"
          spacing={2}
          elevation={8}
          className={classes.card}
        >
          <CardContent>
            <Typography variant="h5" component="h4">
             Contact
            </Typography>
            <br/>
            <a target="_blank" href="tel:+919453467991"><CallIcon style={{ color: green[500] }} className={classes.submit} fontSize="large"/></a>
            <a target="_blank" href="mailto:eshaan.singh.parihar@gmail.com"><MailIcon style={{ color: red[400] }} className={classes.submit} fontSize="large"/></a>
            <a target="_blank" href="https://www.instagram.com/eshaansinghparihar/"><InstagramIcon color="secondary" className={classes.submit} fontSize="large"/></a>
            <a target="_blank" href="https://twitter.com/EshaanParihar"><TwitterIcon style={{ color: blue[400] }} className={classes.submit} fontSize="large"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eshaansinghparihar/"><LinkedInIcon style={{ color: "0b5e86" }} className={classes.submit} fontSize="large"/></a>
            <a target="_blank" href="https://github.com/eshaansinghparihar"><GitHubIcon className={classes.submit} fontSize="large"/></a>
          </CardContent>
        </Paper>

        <Paper
          item
          alignContent="center"
          spacing={2}
          elevation={8}
          className={classes.card}
        >
          <CardContent>
            <Typography variant="h5" component="h4">
            Resume
            </Typography>
            <br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submitbutton}
            >
            <a href="https://drive.google.com/u/0/uc?id=1EZY2A8E1ZAcU1ru49ghgPoioEChuE9Fx&export=download" download>Download CV</a>
            </Button>
          </CardContent>
        </Paper>
    </div>
  );
}

export default Home;
