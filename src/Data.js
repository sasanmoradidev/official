import React from 'react';

// Helper function for formatting dates.
const formatDate = date => new Date( date ).toDateString();

const PostCard = ({post}) => {
  const { postId, title, date, author, featuredImage } = post;
  const { name: authorName } = author;

}
export default {PostCard, formatDate};