import { gql } from 'apollo-angular';

export const GET_CHARACTERS_QUERY = gql<GetCharactersResponse, { page: number }>`
  query getCharacters {
    characters(page: 1) {
      info {
        next
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export type GetCharactersResponse = {
  characters: {
    info: {
      next: number | null;
    };
    results: Character[];
  };
};

export type Character = {
  id: string;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: CharacterGender;
  image: string;
};

export const CHARACTER_STATUSES = ['Alive', 'Dead', 'unknown'] as const;
export type CharacterStatus = typeof CHARACTER_STATUSES[number];

export const CHARACTER_GENDERS = ['Female', 'Male', 'Genderless', 'unknown'] as const;
export type CharacterGender = typeof CHARACTER_GENDERS[number];
