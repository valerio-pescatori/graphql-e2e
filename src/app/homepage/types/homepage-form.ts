import { CharacterGender, CharacterStatus } from '../query/getCharacters';

export type HomepageForm = {
  searchTerm: string | null;
  status: CharacterStatus | null;
  species: string | null;
  gender: CharacterGender | null;
};


