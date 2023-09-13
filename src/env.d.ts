/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_VERSION: string;
  readonly PUBLIC_API_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Pokemon = {
  name: string;
  url: string;
};

type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: {
    name: string;
    url: string;
  }[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: null;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

type PokemonForm = {
  form_name: string;
  form_names: string[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: string[];
  order: number;
  pokemon: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  version_group: {
    name: string;
    url: string;
  };
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Form = {
  name: string;
  url: string;
};

type Version = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: Version;
};

type MoveLearnMethod = {
  name: string;
  url: string;
};

type VersionGroup = {
  name: string;
  url: string;
};

type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
};

type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
};

type Species = {
  name: string;
  url: string;
};

type DreamWorld = {
  front_default: string;
  front_female: null;
};

type Home = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type OfficialArtwork = {
  front_default: string;
  front_shiny: string;
};

type Other = {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
};

type GenerationI = {
  'red-blue': {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  };
  yellow: {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  };
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

type Gold = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type Silver = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type Emerald = {
  front_default: string;
  front_shiny: string;
};

type FireredLeafgreen = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type RubySapphire = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type DiamondPearl = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type HeartgoldSoulsilver = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Platinum = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type BlackWhite = {
  animated: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type OmegarubyAlphasapphire = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type XY = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Icons = {
  front_default: string;
  front_female: null;
};

type UltraSunUltraMoon = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationVIII = {
  icons: Icons;
};

type Versions = {
  'generation-i': GenerationI;
  'generation-ii': {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
  };
  'generation-iii': {
    emerald: Emerald;
    'firered-leafgreen': FireredLeafgreen;
    'ruby-sapphire': RubySapphire;
  };
  'generation-iv': {
    'diamond-pearl': DiamondPearl;
    'heartgold-soulsilver': HeartgoldSoulsilver;
    platinum: Platinum;
  };
  'generation-v': {
    'black-white': BlackWhite;
  };
  'generation-vi': {
    'omegaruby-alphasapphire': OmegarubyAlphasapphire;
    'x-y': XY;
  };
  'generation-vii': {
    icons: Icons;
    'ultra-sun-ultra-moon': UltraSunUltraMoon;
  };
  'generation-viii': GenerationVIII;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonDetail = {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: Other;
    versions: Versions;
  };
  stats: Stat[];
  types: Type[];
  weight: number;
};

export {Pokemon, PokemonList, PokemonDetail, PokemonForm, PokemonSpecies};