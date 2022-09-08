import axios from 'axios';

/* const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}; */

const capitalizeFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const allPokemons = async (state) => {
   const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
   console.log(res.data.results);
   state(res.data.results);
}

const singlePokemon = async (state) => {
   const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
   console.log(res.data.results);
   state(res.data.results);
}

export {
  capitalizeFirst,
  allPokemons,
	singlePokemon
}