import { useEffect, useState } from 'react';
import axios from 'axios';

const UnsplashImage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            client_id: 'l4qGNzaY4X5NxwdNA_ZhZ7mt1-lLOk0wfXsswM6CPm8',
            topics: 'technology', // Set the topics parameter to 'technology'
          },
        });

        setImage(response.data);
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
      }
    };

    fetchImage();
  }, []);
  const mystyle ={
    borderRadius:'6px',
    width:'100%',
    height:'100%',
  }

  return (
    <>
      {image && (
        <img src={image.urls.regular} alt={image.alt_description} style={mystyle}/>
      )}
    </>
  );
};

export default UnsplashImage;
