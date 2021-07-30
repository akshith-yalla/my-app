import React from 'react';
import BookCard from '.'
import book from '../../../book.png';

const BookCardComponent = {
    title: 'BookCard',
    Component: BookCard
}

const Template = (args) => (
    <BookCard {...args}></BookCard>
);
export const DemoBookCard =  Template.bind({})
DemoBookCard.args = {
    author:{
        name: 'StephenFrost, Raafi-Karim', 
        time: '15-min',
        reads: '17.1k'
    },
    thumbnail: 'Building an Inclusive Organization',
    imgSrc: book,
    alt : 'Book Name'
}



export default BookCardComponent;