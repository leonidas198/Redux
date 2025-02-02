import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export const getPokemons = ( page = 0 ) => {
    return async( dispacth, getState ) => {
        dispacth( startLoadingPokemons() );

        // TODO: realizar peticion http
       /*  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        const data = await resp.json(); */
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        //console.log(resp);


        dispacth( setPokemons({
            pokemons: data.results,
            page: page + 1,
        }) );
    }

}