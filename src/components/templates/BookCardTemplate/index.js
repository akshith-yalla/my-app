import React from 'react';
import BookStatusEvent from '../../organisms/BookStatusEvent';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import BookCard from '../../molecules/BookCard';

const useStyles = makeStyles( (theme) => ({
    root:{},
        
    outline: {
        border: "1px solid black",
        borderRadius: theme.spacing(0.5,0.5,0,0),
        width: "24.7rem",
        height: "40rem",
        margin: "auto",
    },
    bookCard :{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        padding: theme.spacing(8),
        textAlign: "center",
      
      }
    
    }));

const BookCardTemplate = (props) => {
    const style = useStyles();
    const {author, imgSrc , thumbnail, alt } = props;


    return(
    <Box className={style.bookCard}>
        <Box className={style.outline}>
            <BookCard author={author} imgSrc={imgSrc} thumbnail={thumbnail} alt = {alt}/>
            <BookStatusEvent />
        </Box>
    </Box>
    );
}

BookCardTemplate.prototypes = {}
BookCardTemplate.defaultProps = {}


export default BookCardTemplate;