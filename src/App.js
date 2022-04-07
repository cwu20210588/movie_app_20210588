import React from "react";

function Food({name,picture}){
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const foodILike =[
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tY7yWP7-KjRrTilhGr6ZggHaE9%26pid%3DApi&f=1'
  },
  {
    name: 'samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vhL7flr5LCRcKWCNr95t3wHaD4%26pid%3DApi&f=1'
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FGbRZ2pPkAjK2LIl9Syw6QHaE7%26pid%3DApi&f=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW17Z8uq6unL6xvle_X0YgHaHa%26pid%3DApi&f=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.muoVibDUIawORHUPymUWfQHaEK%26pid%3DApi&f=1'
  }
];
function App() {
  return <div>
    {foodILike.map(dish=> (<Food name={dish.name} picture={dish.image}/>))}
    </div>;
}

export default App;
