import { gql } from '@apollo/client';

const imageUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
export { imageUrl };

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      base_experience
      height
      weight
      pokemon_v2_pokemonabilities {
        id
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`;
export const GET_POKEMON_LIST = gql`
  query GetPokemon {
    pokemon_v2_pokemon(limit: 20) {
      id
      name
      base_experience
      height
      weight
      pokemon_v2_pokemonabilities {
        id
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`;
