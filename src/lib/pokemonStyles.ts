export function typeColor(type: string) {
  switch (type) {
    case 'normal':
      return 'bg-gray-400 text-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900';
      break;
    case 'fire':
      return 'bg-red-400 text-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 dark:hover:text-red-100 dark:focus:bg-red-800 dark:focus:text-red-100 hover:bg-red-200 hover:text-red-900 focus:bg-red-200 focus:text-red-900';
      break;
    case 'water':
      return 'bg-blue-400 text-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-100 dark:focus:bg-blue-800 dark:focus:text-blue-100 hover:bg-blue-200 hover:text-blue-900 focus:bg-blue-200 focus:text-blue-900';
      break;
    case 'grass':
      return 'bg-green-500 text-green-100 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800 dark:hover:text-green-100 dark:focus:bg-green-800 dark:focus:text-green-100 hover:bg-green-200 hover:text-green-900 focus:bg-green-200 focus:text-green-900';
      break;
    case 'electric':
      return 'bg-yellow-400 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800 dark:hover:text-yellow-100 dark:focus:bg-yellow-800 dark:focus:text-yellow-100 hover:bg-yellow-200 hover:text-yellow-900 focus:bg-yellow-200 focus:text-yellow-900';
      break;
    case 'ice':
      return 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-100 dark:focus:bg-blue-800 dark:focus:text-blue-100 hover:bg-blue-100 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900';
      break;
    case 'fighting':
      return 'bg-red-600 text-red-200 dark:bg-red-900 dark:text-red-700 dark:hover:bg-red-800 dark:hover:text-red-100 dark:focus:bg-red-800 dark:focus:text-red-100 hover:bg-red-600 hover:text-red-900 focus:bg-red-600 focus:text-red-900';
      break;
    case 'poison':
      return 'bg-purple-400 text-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800 dark:hover:text-purple-100 dark:focus:bg-purple-800 dark:focus:text-purple-100 hover:bg-purple-200 hover:text-purple-900 focus:bg-purple-200 focus:text-purple-900';
      break;
    case 'ground':
      return 'bg-yellow-600 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800 dark:hover:text-yellow-100 dark:focus:bg-yellow-800 dark:focus:text-yellow-100 hover:bg-yellow-600 hover:text-yellow-900 focus:bg-yellow-600 focus:text-yellow-900';
      break;
    case 'flying':
      return 'bg-blue-300 text-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-100 dark:focus:bg-blue-800 dark:focus:text-blue-100 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-300 focus:text-blue-900';
      break;
    case 'psychic':
      return 'bg-purple-600 text-purple-900 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800 dark:hover:text-purple-100 dark:focus:bg-purple-800 dark:focus:text-purple-100 hover:bg-purple-600 hover:text-purple-900 focus:bg-purple-600 focus:text-purple-900';
      break;
    case 'bug':
      return 'bg-green-700 text-green-100 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800 dark:hover:text-green-100 dark:focus:bg-green-800 dark:focus:text-green-100 hover:bg-green-500 hover:text-green-900 focus:bg-green-600 focus:text-green-900';
      break;
    case 'rock':
      return 'bg-yellow-800 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800 dark:hover:text-yellow-100 dark:focus:bg-yellow-800 dark:focus:text-yellow-100 hover:bg-yellow-800 hover:text-yellow-900 focus:bg-yellow-800 focus:text-yellow-900';
      break;
    case 'ghost':
      return 'bg-purple-800 text-purple-900 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800 dark:hover:text-purple-100 dark:focus:bg-purple-800 dark:focus:text-purple-100 hover:bg-purple-800 hover:text-purple-900 focus:bg-purple-800 focus:text-purple-900';
      break;
    case 'dark':
      return 'bg-gray-800 text-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 hover:bg-gray-800 hover:text-gray-900 focus:bg-gray-800 focus:text-gray-900';
      break;
    case 'dragon':
      return 'bg-red-800 text-red-900 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 dark:hover:text-red-100 dark:focus:bg-red-800 dark:focus:text-red-100 hover:bg-red-800 hover:text-red-900 focus:bg-red-800 focus:text-red-900';
      break;
    case 'steel':
      return 'bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 hover:bg-gray-600 hover:text-gray-900 focus:bg-gray-600 focus:text-gray-900';
      break;
    case 'fairy':
      return 'bg-pink-400 text-pink-900 dark:bg-pink-900 dark:text-pink-100 dark:hover:bg-pink-800 dark:hover:text-pink-100 dark:focus:bg-pink-800 dark:focus:text-pink-100 hover:bg-pink-200 hover:text-pink-900 focus:bg-pink-200 focus:text-pink-900';
      break;
    case 'unknown':
      return 'bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900';
      break;
    case 'shadow':
      return 'bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100 hover:bg-gray-900 hover:text-gray-900 focus:bg-gray-900 focus:text-gray-900';
      break;
  }
}

export function getColorRGBA(colorName) {
  const colors = {
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    red: [255, 0, 0],
    white: [255, 255, 255],
    yellow: [255, 255, 0],
  };

  const color = colors[colorName.toLowerCase()];
  if (color) {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`;
  } else {
    return null;
  }
}
