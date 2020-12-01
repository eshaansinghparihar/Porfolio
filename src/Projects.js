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
function Projects() {
    const classes = useStyles();
    return (
      <div>
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
              <h3>Do You Know Me CLI APP</h3>
            </Typography>
            <h5>Completed in November 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Assignment 1 for levelZero neog.camp. Developed a Command Line App which is a Quiz about me</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://repl.it/@EshaanSParihar/Quiz#index.js">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/Quiz">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="/">Video NA</a> 
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
              <h3>NeogCamp Quiz App</h3>
            </Typography>
            <h5>Completed in November 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Assignment 1 for levelZero neog.camp. The Quiz is aimed to test a participant's basic knowledge about this Bootcamp.</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://repl.it/@EshaanSParihar/neogcampQuiz#index.js">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/neogcamp_Quiz">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="/">Video NA</a>
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
              <h3>Blabber</h3>
            </Typography>
            <h5>Completed in September 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Developed a Progressive Single Page Real Time Peer to Peer Chat Application, called Blabber using React JS, React Hooks, Context and Firebase.<br/>
People can -:<br/>
1.Chat , send images and gifs in Real time<br/>
2.Get updated Last seen of other users<br/>
3. See new notifications in What's new section<br/>
4.Set display pictures of their choice and remove them when they wish to.<br/>

Note:- Haven't used any library such as Socket.io or WebRTC to implement the real time communication, but is completely implemented using React Hooks.</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://weblabber.netlify.app/">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/Blabber">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/posts/eshaansinghparihar_ever-since-i-learnt-about-react-hooks-my-activity-6710803408527392768-WJHt">View Video</a> 
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
              <h3>Expense Tracker</h3>
            </Typography>
            <h5>Completed in August 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Developed a Progressive Single Page Expense Tracker Web Application using React JS and Google Firebase , to keep a record of all the Transactions.<br/>
Features:-<br/>
1.Add Transactions<br/>
2.View All Transactions, Monthly Transactions and Daily Transactions<br/>
3.Visualize statistics with respect to your Transactions.<br/>
4.Keep a record of your Expected Credit Card bill for this month.</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://cashmanager.netlify.app/">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/ExpenseTracker">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/posts/eshaansinghparihar_developed-a-progressive-single-page-expense-activity-6704995772196278275-67-R">View Video</a> 
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
              <h3>Socio</h3>
            </Typography>
            <h5>Completed in July 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>Developed a Social Networking App which is a Picture Sharing Platform , and is more of an Instagram Clone, using React Native and Google Firebase<br/>
Features:-<br/>
1.Uploading Images as Posts<br/>
2.View ,Like and Comment Posts
</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="https://drive.google.com/u/0/uc?id=1NO2dMP0q6_dEapdbeRNXOhHpz7q1B1Fl&export=download" download>Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/SocialApp">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:6693178068615385088/">View Video</a> 
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
              <h3>COVID-19 Tracker</h3>
            </Typography>
              <h5>Completed in April 2020</h5>
            <Typography variant="subtitle2" component="h4">
            <p>The aim of this Single Page Application is to provide data untouched,
i.e The data is not tampered with.
The data used in this website is being updated twice every day, i.e Every Morning and Evening statistics are updated as soon as they are being made available by MoHFW,Govt. of India<br/>
Features:-<br/>
1.Live Stats of People suffering from COVID-19, Deaths due to this fatal virus and People Recovered<br/>
2.Data is plotted on a Graph<br/>
3.State Wise data of all Indian states<br/>
4.State Wise Helpline Numbers and PM Cares Account Details<br/>
5.Beds reserved for COVID-19 in each hospital across India<br/></p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href="http://covid19citech.netlify.app/">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/covid19tracker">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            Video NA
            </Button>
          </CardContent>
        </Paper>
      </div>
    );
}

export default Projects;