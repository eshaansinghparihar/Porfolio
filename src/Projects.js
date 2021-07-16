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
        name:"justGist",
        completed:"July 2021",
        description:"Developed a MERN Stack based Progressive Single Page News Reading And Discussions Web Application called justGist.\nFeatures :\n1.Read the gists of news articles published by various trusted and authentic news platforms.\n2.Search for specific news from across all the articles written recently.\n3.Save articles to read later and delete them after you're done.\n4.Discuss about a gist with like-minded people by moving the gist to Discussions or exploring interesting questions in the Discussion asked by other people.",
        projectUrl:"https://justgist.herokuapp.com",
        githubUrl:"https://github.com/eshaansinghparihar/justgist",
        videoUrl:"https://www.linkedin.com/posts/eshaansinghparihar_developed-a-mern-stack-based-progressive-activity-6817869736970387456-9OsM"
        },
        {
        name:"cooking Simplified",
        completed:"June 2021",
        description:"Developed a Progressive Single Page Recipe Suggestion Web Application based on ReactJS called cooking Simplified.The app is responsive and can be used comfortably on devices of almost any size.\nFeatures :\n1.Get recipe suggestions based on the availability of ingredients.\n2.Search for a specific recipe from across all the recipes around the globe.\n3.Filter the recipes based on the maximum permissible amounts of certain nutrients\n4.Get random recipe ideas.\n5.Provides a detailed nutritional analysis, approximate cost and Wine Pairing information.",
        projectUrl:"https://cookingsimplified.netlify.app",
        githubUrl:"https://github.com/eshaansinghparihar/cookingSimplified",
        videoUrl:"https://www.linkedin.com/posts/eshaansinghparihar_developed-a-progressive-single-page-recipe-activity-6818615376545398785-MJLV"
        },
        {
        name:"Blabber",
        completed:"September 2020",
        description:"Developed a Progressive Single Page Real Time Peer to Peer Chat Application, called Blabber using React JS, React Hooks, Context and Firebase.\nPeople can -:\n1.Chat , send images and gifs in Real time\n2.Get updated Last seen of other users\n3. See new notifications in What's new section\n4.Set display pictures of their choice and remove them when they wish to.\n\nNote:- Haven't used any library such as Socket.io or WebRTC to implement the real time communication, but is completely implemented using React Hooks.",
        projectUrl:"https://weblabber.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/Blabber",
        videoUrl:"https://www.linkedin.com/posts/eshaansinghparihar_ever-since-i-learnt-about-react-hooks-my-activity-6710803408527392768-WJHt"
      },
       {
        name:"Expense Tracker",
        completed:"August 2020",
        description:"Developed a Progressive Single Page Expense Tracker Web Application using React JS and Google Firebase , to keep a record of all the Transactions.\nFeatures:-\n1.Add Transactions\n2.View All Transactions, Monthly Transactions and Daily Transactions\n3.Visualize statistics with respect to your Transactions.\n4.Keep a record of your Expected Credit Card bill for this month.",
        projectUrl:"https://cashmanager.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/ExpenseTracker",
        videoUrl:"https://www.linkedin.com/posts/eshaansinghparihar_developed-a-progressive-single-page-expense-activity-6704995772196278275-67-R"
      },
       {
        name:"Socio",
        completed:"July 2020",
        description:"Developed a Social Networking App which is a Picture Sharing Platform , and is more of an Instagram Clone, using React Native and Google Firebase\nFeatures:-\n1.Uploading Images as Posts\n2.View ,Like and Comment Posts",
        projectUrl:"https://drive.google.com/u/0/uc?id=1NO2dMP0q6_dEapdbeRNXOhHpz7q1B1Fl&export=download",
        githubUrl:"https://github.com/eshaansinghparihar/SocialApp",
        videoUrl:"https://www.linkedin.com/feed/update/urn:li:activity:6693178068615385088/"
      },
      {
        name:"good Travel",
        completed:"December 2020",
        description:"You would find some good recommendations for your next travel destinations. Made using ReactJS with love.This application makes use of OpenTripMap REST API to get the attractions.\nFeatures:\n1. Shows suggestions based on the maximum radius range provided by the user.\n2.Displays Live Traffic around every destination on the map.\n3.Allows the user to open the location directly on Google maps for a faster navigation.",
        projectUrl:"https://goodtravel.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/TravelRecommendationWithMap",
        videoUrl:"https://www.linkedin.com/posts/eshaansinghparihar_developed-a-tourist-destinations-suggestion-activity-6821850974706032641-wUOu"
      },
       {
        name:"COVID-19 Tracker",
        completed:"April 2020",
        description:"The aim of this Single Page Application is to provide data untouched,i.e The data is not tampered with.The data used in this website is being updated twice every day, i.e Every Morning and Evening statistics are updated as soon as they are being made available by MoHFW,Govt. of India\nFeatures:-\n1.Live Stats of People suffering from COVID-19, Deaths due to this fatal virus and People Recovered\n2.Data is plotted on a Graph\n3.State Wise data of all Indian states\n4.State Wise Helpline Numbers and PM Cares Account Details\n5.Beds reserved for COVID-19 in each hospital across India\n",
        projectUrl:"http://covid19citech.netlify.app/",
        githubUrl:"https://github.com/eshaansinghparihar/covid19tracker",
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
        name:"NeogCamp Quiz App",
        completed:"November 2020",
        description:"Assignment 1 for levelZero neog.camp. The Quiz is aimed to test a participant's basic knowledge about this Bootcamp.",
        projectUrl:"https://repl.it/@EshaanSParihar/neogcampQuiz#index.js",
        githubUrl:"https://github.com/eshaansinghparihar/neogcamp_Quiz",
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
        <div class="projectCard">
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
        </div>
      );
    })

    return (
      <div>
        <CssBaseline />
        {projectCards}
      </div>
    );
}

export default Projects;