import React from 'react';
import BookCard from '../../molecules/BookCard';
import { useState } from 'react';
import book from '../../../book.png';
import Button from '../../atoms/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    bookButton:{
        float: "left",
        marginTop: "2rem",
        marginLeft: "1rem",
        color: "white",
        borderRadius: "4px",
        padding: ".5rem",
        background: "cadetblue",
        cursor: "pointer"
      }
})

const BookStatusEvent = () => {
    const styles = useStyles();

    const [bookState, setBookState] = useState('Currently Reading')
    const onStatusChange = () => {
        bookState === 'Currently Reading' ? setBookState('Finished Reading') : setBookState('Currently Reading')  
    }
    
        return ( 
            <Box>
                <BookCard author={{
                    name: 'StephenFrost, Raafi-Karim', 
                    time: '15-min',
                    reads: '17.1k'
                }}
                thumbnail = 'Building an Inclusive Organization'
                bookState  = 'Continue Reading'
                imgSrc = {book}
                onBookStatusChange = {onStatusChange}
                alt ='Book Name' />
                <Box className={styles.bookButton}><Button onClick={onStatusChange} title={bookState} /></Box>
            </Box>

        );
}

BookStatusEvent.propTypes = {}
BookStatusEvent.defaultProps = {};

export default BookStatusEvent;


