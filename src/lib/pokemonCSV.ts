function resultMap(data: string, index: number) {
  const id = data.split('\n').map((name: string) => name.split(',')[0]);
  const language = data.split('\n').map((name: string) => name.split(',')[1]);
  const name = data.split('\n').map((name: string) => name.split(',')[2]);
  const description = data.split('\n').map((name: string) => name.split(',')[3]);
  const map = name.reduce((acc: any, cur: string, index: number) => {
    if (language[index] === '4') {
      if (description[index] !== undefined) {
        acc[id[index]] = {name: cur, description: description[index]};
      } else {
        acc[id[index]] = cur;
      }
    }
    return acc;
  }, {});
  return map[index];
}

export async function pokemonNameFromID(id: number) {
  const nameRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/pokemon_species_names.csv'
  );
  const nameData = await nameRes.text();
  const nameMap = resultMap(nameData, id);
  return nameMap[id];
}

export async function pokemonTypesFromID(id: number) {
  const typeRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/type_names.csv'
  );
  const typeData = await typeRes.text();
  const typeMap = resultMap(typeData, id);
  return typeMap[id];
}

export async function pokemonStatFromID(id: number) {
  const statRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/stat_names.csv'
  );
  const stateData = await statRes.text();
  const statMap = resultMap(stateData, id);
  return statMap[id];
}

export async function pokemonVersionFromID(id: number) {
  const versionRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/version_names.csv'
  );
  const versionData = await versionRes.text();
  const versionMap = resultMap(versionData, id);
  return versionMap[id];
}

export async function pokemonAbilityFromID(id: number) {
  const abilityRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/ability_names.csv'
  );
  const abilityData = await abilityRes.text();
  const abilityMap = resultMap(abilityData, id);
  return abilityMap[id];
}

export async function pokemonFormFromID(id: number) {
  const formRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/pokemon_form_names.csv'
  );
  const formData = await formRes.text();
  const formMap = resultMap(formData, id);
  return formMap[id];
}

export async function pokemonColorFromID(id: number) {
  const colorRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/pokemon_color_names.csv'
  );
  const colorData = await colorRes.text();
  const colorMap = resultMap(colorData, id);
  return colorMap[id];
}

export async function pokemonNatureFromID(id: number) {
  const natureRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/nature_names.csv'
  );
  const natureData = await natureRes.text();
  const natureMap = resultMap(natureData, id);
  return natureMap[id];
}

export async function pokemonMoveFromID(id: number) {
  const moveRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/move_names.csv'
  );
  const moveData = await moveRes.text();
  const moveMap = resultMap(moveData, id);
  return moveMap[id];
}

export async function pokemonMoveDamageClassFromID(id: number) {
  const moveDamageClassRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/move_damage_class_prose.csv'
  );
  const moveDamageClassData = await moveDamageClassRes.text();
  const moveDamageClassMap = resultMap(moveDamageClassData, id);
  return moveDamageClassMap[id];
}

export async function pokemonItemPocketFromID(id: number) {
  const itemPocketRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/item_pocket_names.csv'
  );
  const itemPocketData = await itemPocketRes.text();
  const itemPocketMap = resultMap(itemPocketData, id);
  return itemPocketMap[id];
}

export async function pokemonItemFromID(id: number) {
  const itemRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/item_names.csv'
  );
  const itemData = await itemRes.text();
  const itemMap = resultMap(itemData, id);
  return itemMap[id];
}

export async function pokemonGenerationFromID(id: number) {
  const generationRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/generation_names.csv'
  );
  const generationData = await generationRes.text();
  const generationMap = resultMap(generationData, id);
  return generationMap[id];
}

export async function pokemonEggGroupFromID(id: number) {
  const eggGroupRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/generation_names.csv'
  );
  const eggGroupData = await eggGroupRes.text();
  const eggGroupMap = resultMap(eggGroupData, id);
  return eggGroupMap[id];
}

export async function pokemonCharacterIsticFromID(id: number) {
  const characterIsticRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/characteristic_text.csv'
  );
  const characterIsticData = await characterIsticRes.text();
  const characterIsticMap = resultMap(characterIsticData, id);
  return characterIsticMap[id];
}

export async function pokemonBerryFirmnessFromID(id: number) {
  const berryFirmnessRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/berry_firmness_names.csv'
  );
  const berryFirmnessData = await berryFirmnessRes.text();
  const berryFirmnessMap = resultMap(berryFirmnessData, id);
  return berryFirmnessMap[id];
}

export async function pokemonAbilityFlavorFromID(id: number) {
  const abilityFlavorRes = await fetch(
    'https://github.com/PokeAPI/pokeapi/raw/master/data/v2/csv/ability_flavor_text.csv'
  );
  const abilityFlavorData = await abilityFlavorRes.text();
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
