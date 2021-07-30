import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '../../atoms/Typography'
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';


const useStyles = makeStyles({
  root:{},
    
  reads:{
    float: "right",
    marginRight: "1rem",
  },
  thumbnail: {
    textAlign: "left",
    marginLeft: "1rem"
  },
  image:{
    padding: "4rem",
    width: "16.75rem",
    height: "17.75rem",
    background: "cadetblue"
  },
  more:{
    float: "right",
    marginRight: "-6rem",
    marginTop: "4rem"
  },
  
  time : {
    float : "left",
    marginLeft: "1rem",

  },
  author : {
    marginRight: "3rem",
    float: "left",
    marginBottom: "0.1rem",
    marginLeft: "1rem",
  },

});


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { author} = props;
    return (
      <Box>
        <Box className={styles.image}><img src={props.imgSrc} alt={props.alt} /></Box>
        <Box className={styles.thumbnail}><Typography variant="header">{props.thumbnail}</Typography></Box>
        <Box className={styles.author}><Typography variant="title">{author.name}...</Typography></Box>
        <Box className={styles.time}><AccessTime style={{marginBottom:-5}} /> {author.time} read</Box>
        <Box className={styles.reads}><PersonOutline  style={{marginBottom:-5}} /> {author.reads} reads</Box>
        <Box className={styles.more}> <MoreHoriz /></Box>
      </Box>
    );
    
  }

  BookCardComponent.propTypes = {
    author: PropTypes.shape({
        name : PropTypes.string.isRequired,
        time : PropTypes.string.isRequired,
        reads : PropTypes.string.isRequired

    }),
    thumbnail : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    alt : PropTypes.string.isRequired

}

BookCardComponent.defaultProps = {};

export default BookCardComponent;

