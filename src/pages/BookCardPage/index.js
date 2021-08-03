import React from 'react';
import BookCardTemplate from '../../components/templates/BookCardTemplate';
import book from '../../assets/images/book.png';


const BookCardPage = () => {


    return ( 
        <BookCardTemplate author={{
            name: 'StephenFrost, Raafi-Karim', 
            time: '15-min',
            reads: '17.1k'
        }}
        thumbnail = 'Building an Inclusive Organization'
        imgSrc = {book}
        alt ='Book Name' />
    );

}

BookCardPage.prototypes = {};

BookCardPage.defaultProps = {};

export default BookCardPage;