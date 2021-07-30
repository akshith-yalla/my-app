import React from 'react';
import BookStatusEvent from '../../organisms/BookStatusEvent';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root:{},
        
    outline: {
        border: "1px solid black",
        borderRadius: "0.25rem 0.25rem 0 0",
        width: "24.7rem",
        height: "40rem",
        margin: "auto",
    },
    bookCard :{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        padding: "6.25rem",
        textAlign: "center",
      
      }
    
    });

const BookCardTemplate = (props) => {
    const style = useStyles();


    return(
    <Box className={style.bookCard}>
        <Box className={style.outline}>
            <BookStatusEvent />
        </Box>
    </Box>
    );
}

BookCardTemplate.prototypes = {}
BookCardTemplate.defaultProps = {}


export default BookCardTemplate;