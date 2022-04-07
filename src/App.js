import PropTypes from "prop-types";

function Food({name,picture}){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike =[
  {
    id:1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tY7yWP7-KjRrTilhGr6ZggHaE9%26pid%3DApi&f=1',
    rating: 5
  },
  {
    id: 2,
    name: 'samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vhL7flr5LCRcKWCNr95t3wHaD4%26pid%3DApi&f=1',
    rating:4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FGbRZ2pPkAjK2LIl9Syw6QHaE7%26pid%3DApi&f=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW17Z8uq6unL6xvle_X0YgHaHa%26pid%3DApi&f=1',
    rating:4.5
  },
  {
    id:5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.muoVibDUIawORHUPymUWfQHaEK%26pid%3DApi&f=1',
    rating: 5
  }
];
function App() {
  return <div>
    {foodILike.map(dish=> (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>;
}

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;
