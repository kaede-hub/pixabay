import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './compornets/SearchBar';
import ImageList from './compornets/ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
  const onSerachSubmit = async(term) => {
    try {
      const params ={
       key:ApiKey,
       q: term,
      };
      const response = await axios.get("https://pixabay.com/api/", {params});
      setImages(response.data.hits);
      if(response.data.total === 0) {
        window.alert('お探しの画像はありません。');
      }
    }catch {
     window.alert('写真の取得は失敗しました。');
    }
  };
  return(
    <div className='ui container' style={{ marginTop:'20px'}}>
      <SearchBar onSubmit={onSerachSubmit}/>
      <ImageList Images={images}/>
    </div>
  );
};

export default App;