import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '../../atoms/Typography'
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root:{},
    
  reads:{
    float: "right",
    marginRight: theme.spacing(1),
  },
  thumbnail: {
    textAlign: "left",
    marginLeft: theme.spacing(1)
  },
  image:{
    padding: theme.spacing(8),
    width: "16.75rem",
    height: "17.75rem",
    background: "cadetblue"
  },
  more:{
    float: "right",
    marginRight: theme.spacing(-12),
    marginTop: theme.spacing(8)
  },
  
  time : {
    float : "left",
    marginLeft: theme.spacing(2),

  },
  author : {
    marginRight: theme.spacing(6),
    float: "left",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },

}));


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { author, imgSrc, alt, thumbnail } = props;
    return (
      <Box>
        <Box className={styles.image}><img src={imgSrc} alt={alt} /></Box>
        <Box className={styles.thumbnail}><Typography variant="header">{thumbnail}</Typography></Box>
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

