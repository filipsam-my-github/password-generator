import * as chars_types from "./characters.js";

function getRandomItemFromArray(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function generatePassword(
  upercase_letters,
  lowercase_letters,
  numbers,
  symbols,
  length_of_password
) {
  console.log(
    upercase_letters,
    lowercase_letters,
    numbers,
    symbols,
    length_of_password
  );
  let generating_password = "";
  let avalableSymbols = [];

  if (upercase_letters) {
    avalableSymbols = [...avalableSymbols, ...chars_types.bigLetters];
  }
  if (lowercase_letters) {
    avalableSymbols = [...avalableSymbols, ...chars_types.smallLetters];
  }
  if (numbers) {
    avalableSymbols = [...avalableSymbols, ...chars_types.numbers];
  }
  if (symbols) {
    avalableSymbols = [...avalableSymbols, ...chars_types.symbols];
  }

  if (avalableSymbols.length === 0) {
    throw new Error(
      `there was nothing selected password cannot be created from following symbols {exception rule avalableSymbols.length === 0} {avalableSymbols.length:${avalableSymbols.length},avalableSymbols:${avalableSymbols}, args:(${upercase_letters},${lowercase_letters}, ${numbers}, ${symbols}, ${length_of_password})}`
    );
  }

  if (length_of_password <= 0) {
    throw new Error(
      `lenght of password prevents creating one {exception rule length_of_password <= 0} {length_of_password:${length_of_password}, args:(${upercase_letters},${lowercase_letters}, ${numbers}, ${symbols}, ${length_of_password})`
    );
  }

  for (let i = 0; i < length_of_password; i++) {
    generating_password += getRandomItemFromArray(avalableSymbols);
  }

  return generating_password;
}
