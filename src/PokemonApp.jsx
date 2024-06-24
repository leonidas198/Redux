import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';


export const PokemonApp = () => {

  const dispacht = useDispatch()

  const { isLoading, page, pokemons = [] } = useSelector( ( state ) => state.pokemons )

  useEffect(() => {
    dispacht( getPokemons() );
  }, [])
  

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: { isLoading ? 'true' : 'false' }</span>

        <ul>
          { 
            pokemons.map( ({name}) => (
              <li key={name}>{ name }</li>
            ) ) 
          }
           
           
        </ul>
        <button
          disabled={ isLoading }
          onClick={ () => dispacht( getPokemons(page) ) }
        >
          NextPage
        </button>
    </>
  )
}
