import React,{Component} from 'react';
import { Paper, Tab ,Tabs} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import './App.css';
const styles = (theme) => ({
  root: {
    width: '100%',
    height:'13vh',
    '& > svg': {
      margin: theme.spacing(0),
    },
    marginLeft:'auto',
    marginRight:'auto',
  },
})
class Navigation extends Component{
  
  constructor(props){
    super(props);
    this.state={
      value: window.location.pathname
    }
  }
  render(){
    const { classes } = this.props;
    return (
        <Paper item alignContent="center" elevation={8} spacing={2} className={classes.paper} >
        <Tabs variant="fullWidth" value={this.state.value} onChange={(event, newValue) => {this.setState({value:newValue});}} className={classes.root}>
        <Tab component={Link} label="Home" value="/" to='/' icon={<HomeIcon fontSize="small"/>}/>
        <Tab component={Link} label="Project" value="/project" to='/project' icon={<WorkIcon fontSize="small"/>}/>
        <Tab component={Link} label="Blog" value="/blog" to='/blog' icon={<BookIcon fontSize="small" />}  />
        </Tabs>
        </Paper>
    );
  }

}
export default withStyles(styles, { withTheme: true })(Navigation);
