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
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
  }));
function Blogs() {
  const classes = useStyles();
  const blogObject=[
    {
      name:"Develop a Simple Progressive Web App with React",
      completed:"December 2020",
      description:"Web applications can reach anyone, anywhere, on any device with a single codebase.This article provides a step-by-step demonstration to convert your React application into an installable PWA",
      blogUrl:"https://eshaansinghparihar.medium.com/develop-a-simple-progressive-web-app-with-react-b5d8272c3102",
      githubUrl:"https://github.com/eshaansinghparihar/simple-pwa",
    },
    {
      name:"Integrating Google Maps in a React Application",
      completed:"December 2020",
      description:"Google Maps is a modern miracle in many respects. The possibilities it allows for are endless and can provide real value to your business and users. From showing your office location to showing a route a package delivery will take, Google Maps is flexible and powerful enough to handle a wide variety of use cases..This article provides a step-by-step demonstration to integrate it your React application",
      blogUrl:"https://eshaansinghparihar.medium.com/integrating-google-maps-in-a-react-application-b7e530d48de4",
      githubUrl:"https://github.com/eshaansinghparihar/react-googlemap",
    },
    {
      name:"Pass data between React Components using Hooks and Context",
      completed:"December 2020",
      description:"Often you would have faced trouble in passing data between various components in React.This article provides a step-by-step demonstration to allow easy state management",
      blogUrl:"https://eshaansinghparihar.medium.com/pass-data-between-react-components-using-hooks-and-context-d7018986262a",
      githubUrl:"https://github.com/eshaansinghparihar/context",
    },
  ]

  const blogCard = blogObject.map(blog=>{
    return(
      <Paper
        item
        alignContent="center"
        spacing={2}
        elevation={8}
        className={classes.card}
      >
        <CardContent>
          <Typography variant="subtitle1" component="h4">
          <h3>{blog.name}</h3>
          </Typography>
          <h5>Completed in {blog.completed}</h5>
          <Typography variant="subtitle2" component="h4">
            <p>{blog.description}</p>
            </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
          <a target="_blank" href={blog.blogUrl} rel="noreferrer">Read Blog</a>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          <a target="_blank" href={blog.githubUrl} rel="noreferrer">{blog.githubUrl?"View Github Repo":"Git Repo NA"}</a>
          </Button>
        </CardContent>
      </Paper>
    );
  })

  return (
    <div className="App">
        <CssBaseline />
        {blogCard}
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
            <a target="_blank" href="https://github.com/eshaansinghparihar/selfhelp">View Github Repo</a>
            </Button>
          </CardContent>
        </Paper>
    </div>
  );
}

export default Blogs;