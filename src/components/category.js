import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const categories = ['Sci-Fi', 'Fiction', 'Comedy'];

function BookCategories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Typography variant="h5">Select a Book Category</Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCategory && (
        <Typography variant="body1" style={{ marginTop: '16px' }}>
          You selected: {selectedCategory}
        </Typography>
      )}
    </div>
  );
}

export default BookCategories;
