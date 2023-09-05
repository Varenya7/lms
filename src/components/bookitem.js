import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Checkbox,
} from '@mui/material';

const BookItem = ({ book, onItemSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    onItemSelect(book, !isSelected);
  };

  const handleImageClick = () => {
    setIsSelected(!isSelected);
    onItemSelect(book, !isSelected);
  };

  return (
    <Card>
      <CardActionArea onClick={handleImageClick}>
        <CardMedia component="img" alt={book.title} height="200" image={book.img} />
        <CardContent>
          <Checkbox
            checked={isSelected}
            onChange={handleCheckboxChange}
            color="primary"
          />
          <Typography variant="h6" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Author: {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookItem;