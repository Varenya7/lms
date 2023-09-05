import React, { useState, useEffect } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
} from '@mui/material';
import BookList from '../container/booklist';

const BookPage = ({ itemData }) => {
  const categories = [...new Set(itemData.map((book) => book.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems([]);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemSelect = (selectedBook, isSelected) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, selectedBook]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== selectedBook));
    }
  };

  const handleCheckout = () => {
    console.log('Selected Items:', selectedItems);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Book Selection</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel>Select Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Select Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="All">All</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <BookList
          books={itemData}
          selectedCategory={selectedCategory}
          onItemSelect={handleItemSelect}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          Selected Items: {selectedItems.length}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default BookPage;