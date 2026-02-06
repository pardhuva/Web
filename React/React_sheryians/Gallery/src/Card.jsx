import React from 'react'

const Card = (props) => {
  const item = props.item; 

  return (
    <div key={item.id} className="border border-gray-300 rounded p-3 m-2 text-center">
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Author:</strong> {item.author}</p>
      <p><strong>Width:</strong> {item.width}</p>
      <p><strong>Height:</strong> {item.height}</p>
      <img src={item.download_url} alt={item.author} className="w-40 h-40 object-cover mt-2 mx-auto rounded" />
    </div>
  );
};

export default Card;
