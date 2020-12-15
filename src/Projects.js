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

    const projectObject=[
      {
        name:"good Travel",
        completed:"December 2020",
        description:"You would find some good recommendations for your next travel destinations. Made using ReactJS with love.This application makes use of OpenTripMap REST API to get the attractions.",
        projectUrl:"https://goodtravel.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/TravelRecommendation",
        videoUrl:""
      },
      {
        name:"Emoji Dictionary",
        completed:"December 2020",
        description:"A unique Dictionary app that lets you find the exact meanings of Emojis used on Day-to-Day basis.",
        projectUrl:"https://emojidict.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/EmojiDictionary",
        videoUrl:""
      },
      {
        name:"Be A Shakespeare",
        completed:"November 2020",
        description:"Translation app to translate your simple English sentences to Shakespeare's Dialogue.",
        projectUrl:"https://be-a-shakespeare.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/ShakespeareSpeak",
        videoUrl:""
      },
      {
        name:"Banana Speak",
        completed:"November 2020",
        description:"Wanna speak like Minions? Try this application to convert your English sentences to Minion Language.",
        projectUrl:"https://talkminion.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/BananaSpeak",
        videoUrl:""
      },
      {
        name:"Do You Know Me CLI APP",
        completed:"November 2020",
        description:"Assignment 1 for levelZero neog.camp. Developed a Command Line App which is a Quiz about me",
        projectUrl:"https://repl.it/@EshaanSParihar/Quiz#index.js",
        githubUrl:"https://github.com/eshaansinghparihar/Quiz",
        videoUrl:""
      },
      {
        name:"NeogCamp Quiz App",
        completed:"November 2020",
        description:"Assignment 1 for levelZero neog.camp. The Quiz is aimed to test a participant's basic knowledge about this Bootcamp.",
        projectUrl:"https://repl.it/@EshaanSParihar/neogcampQuiz#index.js",
        githubUrl:"https://github.com/eshaansinghparihar/neogcamp_Quiz",
        videoUrl:""
      },
      // {
      //   name:"",
      //   completed:"December 2020",
      //   description:"",
      //   projectUrl:"",
      //   githubUrl:"",
      //   videoUrl:""
      // },
    ]

    const projectCards = projectObject.map(project=>{
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
            <h3>{project.name}</h3>
            </Typography>
            <h5>Completed in {project.completed}</h5>
            <Typography variant="subtitle2" component="h4">
            <p>{project.description}</p>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
            <a target="_blank" href={project.projectUrl} rel="noreferrer">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href={project.githubUrl} rel="noreferrer">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href={project.videoUrl} rel="noreferrer">{project.videoUrl?"View Video":"Video NA"}</a>
            </Button>
          </CardContent>
        </Paper>
      );
    })

    return (
      <div>
        <CssBaseline />
        {projectCards}
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
            <a target="_blank" href="https://weblabber.netlify.app/" rel="noreferrer">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/Blabber" rel="noreferrer">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/posts/eshaansinghparihar_ever-since-i-learnt-about-react-hooks-my-activity-6710803408527392768-WJHt" rel="noreferrer">View Video</a> 
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
            <a target="_blank" href="https://cashmanager.netlify.app/" rel="noreferrer">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/ExpenseTracker" rel="noreferrer">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/posts/eshaansinghparihar_developed-a-progressive-single-page-expense-activity-6704995772196278275-67-R" rel="noreferrer">View Video</a> 
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
            <a target="_blank" href="https://drive.google.com/u/0/uc?id=1NO2dMP0q6_dEapdbeRNXOhHpz7q1B1Fl&export=download" download rel="noreferrer">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/SocialApp" rel="noreferrer">View Github Repo</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:6693178068615385088/" rel="noreferrer">View Video</a> 
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
            <a target="_blank" href="http://covid19citech.netlify.app/" rel="noreferrer">Try Project</a>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            <a target="_blank" href="https://github.com/eshaansinghparihar/covid19tracker" rel="noreferrer">View Github Repo</a>
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