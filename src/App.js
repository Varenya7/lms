
// import './App.css';

import SignInOutContainer from './container/contain';
// import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import BookCategories from './components/category';
import TitlebarBelowMasonryImageList from './components/cat1'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import BookPage from './main_pg/bookpage'



// import ButtonUsage from './test';

export default function App() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
      author: "swabdesign",
      category: "Thriller"
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
      author: "Pavel Nekoranec",
      category: "Thriller"
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
      author: "Charles Deluvio",
      category: "Thriller"
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
      author: "Christian Mackie",
      category: "Drama"
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Kitchen",
      author: "Darren Richardson",
      category: "Drama"
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Kitchen",
      author: "Taylor Simpson",
      category: "Drama"
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
      author: "Ben Kolde",
      category: "History"
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
      author: "Philipp Berndt",
      category: "History"
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
      author: "Jen P.",
      category: "History"
    }
  ];
  return (
    // <div className="App">
    //   <SignInOutContainer/>
    //   <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <Paper elevation={3} style={{ padding: '16px', marginTop: '32px' }}>
    //     <Typography variant="h4" align="center">
    //       Book Categories
    //     </Typography>
    //     <BookCategories />
    //   </Paper>
    // </Container>
    // < TitlebarBelowMasonryImageList />
    // </div>
    // <h1>hello</h1>
    
    <div className="App">
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<SignInOutContainer />} />
      <Route path="/category" element={<BookCategories />} />
      <Route path="/cat1" element={<TitlebarBelowMasonryImageList /> } />
      <Route path="/bookpage" element={<BookPage itemData={itemData} /> } />
      
     


    </Routes>
    </BrowserRouter>
    </div>
  );
}


