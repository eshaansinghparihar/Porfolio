import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
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
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
  }));
function Blogs() {
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
            <Typography variant="subtitle1" component="h4">
              <h3>Personal Blogs</h3>
            </Typography>
            <h5>Completed in July 2019</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Created a Website using HTML & CSS for personal blogging.<br/>
            The blog aimed at providing summaries of Famous Must Read Self Help Books.</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://selfhelp.netlify.app/">Read Blog</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/selfhelp">View Github Repository</a>
            </Button>
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
            <Typography variant="subtitle1" component="h4">
              <h3>Technical Blogs</h3>
            </Typography>
            <Typography variant="subtitle2" component="h4">
            <p>Training to write Technical Blogs in action.</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="/">Coming Soon</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="/">Coming Soon</a>
            </Button>
          </CardContent>
        </Paper>
    </div>
  );
}

export default Blogs;