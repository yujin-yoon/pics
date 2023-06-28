import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

// Goal: After doing a search, we want to update content on the sceren with the new list of images (STATE!)
 //   We need to communicate the array of images down to ImageList -> 
 //   Might look confusing bcause we are going t ocombine the state + prop system ->*/
