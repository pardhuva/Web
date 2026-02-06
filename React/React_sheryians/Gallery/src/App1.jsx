import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

function App() {
  const [userData, setData] = useState([]);
  const [index, setIndex] = useState(0);

  // useEffect replaces the button click
  useEffect(() => {
    const getData = async () => {
      console.log("Fetching data automatically...");

      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
        setData(response.data);
        console.log(response.data);

        // Example POST (just for learning, this won't actually work on this API)
        // await axios.post('https://picsum.photos/v2/list', {
        //   id: "3",
        //   author: "Alejandro Escamilla",
        //   width: 5000,
        //   height: 3333,
        //   url: "https://unsplash.com/photos/Dl6jeyfihLk",
        //   download_url: "https://picsum.photos/id/3/5000/3333"
        // });

        // Example PATCH
        // await axios.patch('https://example.com/api/update/3', { author: "Updated Name" });

        // Example DELETE
        // await axios.delete('https://example.com/api/delete/3');
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [index]); // empty dependency array → runs only once when component mounts

  let printUserData = 'Loading.......';

  if (userData.length > 0) {
    printUserData = userData.map((item) => (
      <Card  item={item}/>
    ));
  }
  
  return (
    <div className='bg-white text-black'>
      <h1 className='text-center text-2xl font-semibold mt-4'>Picsum Photo Gallery</h1>
      <div className='flex flex-wrap justify-center'>{printUserData}</div>
      <div className='flex justify-center gap-6'>
        <button  className='bg-amber-300 text-black h-10 w-15 m-5'onClick={()=> {
          if(index >1)
            setData([]);
            {setIndex(index-1)}
        }}>Prev</button>
        <p className='m-3 mt-8'>Page {index} </p>
        <button className='bg-amber-300 text-black h-10 w-15 m-5' onClick={() =>{ 
            setData([])
            setIndex(index + 1)
            }}>Next</button>
      </div>
    </div>
  );
}

export default App;
