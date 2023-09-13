import fs from 'fs';

function getPokemonDataFromID(id, filename) {
  const data = fs.readFileSync(`src/data/csv/${filename}`, 'utf8');
  const dataList = data.split('\n');
  const map = dataList.reduce((acc: any, cur: string) => {
    const id = cur.split(',')[0];
    const language = cur.split(',')[1];
    const name = cur.split(',')[2];
    const description = cur.split(',')[3];
    if (language === '4') {
      acc[id] = name;
    }
    return acc;
  }, {});
  return map[id];
}

export async function pokemonNameFromID(id: number) {
  return getPokemonDataFromID(id, 'pokemon_species_names.csv');
}

export async function pokemonTypesFromID(id: number) {
  return getPokemonDataFromID(id, 'type_names.csv');
}

export async function pokemonStatFromID(id: number) {
  return getPokemonDataFromID(id, 'stat_names.csv');
}

export async function pokemonVersionFromID(id: number) {
  return getPokemonDataFromID(id, 'version_names.csv');
}

export async function pokemonAbilityFromID(id: number) {
  return getPokemonDataFromID(id, 'ability_names.csv');
}

export async function pokemonFormFromID(id: number) {
  return getPokemonDataFromID(id, 'pokemon_form_names.csv');
}

export async function pokemonColorFromID(id: number) {
  return getPokemonDataFromID(id, 'pokemon_color_names.csv');
}

export async function pokemonNatureFromID(id: number) {
  return getPokemonDataFromID(id, 'nature_names.csv');
}

export async function pokemonMoveFromID(id: number) {
  return getPokemonDataFromID(id, 'move_names.csv');
}

export async function pokemonMoveDamageClassFromID(id: number) {
  return getPokemonDataFromID(id, 'move_damage_class_prose.csv');
}

export async function pokemonItemPocketFromID(id: number) {
  return getPokemonDataFromID(id, 'item_pocket_names.csv');
}

export async function pokemonItemFromID(id: number) {
  return getPokemonDataFromID(id, 'item_names.csv');
}

export async function pokemonGenerationFromID(id: number) {
  return getPokemonDataFromID(id, 'generation_names.csv');
}

export async function pokemonEggGroupFromID(id: number) {
  return getPokemonDataFromID(id, 'egg_group_prose.csv');
}

export async function pokemonCharacterIsticFromID(id: number) {
  return getPokemonDataFromID(id, 'characteristic_text.csv');
}

export async function pokemonBerryFirmnessFromID(id: number) {
  return getPokemonDataFromID(id, 'berry_firmness_names.csv');
}

export async function pokemonAbilityFlavorFromID(id: number) {
  const abilityFlavorData = fs.readFileSync('src/data/csv/ability_flavor_text.csv', 'utf8');
  const abilityId = abilityFlavorData.split('\n').map((name: string) => name.split(',')[0]);
  const language = abilityFlavorData.split('\n').map((name: string) => name.split(',')[2]);
  const flavor = abilityFlavorData.split('\n').map((name: string) => name.split(',')[3]);
  const abilityFlavorMap = abilityId.reduce((acc: any, cur: string, index: number) => {
    if (language[index] === '4') {
      acc[abilityId[index]] = flavor[index];
    }
    return acc;
  }, {});
}
