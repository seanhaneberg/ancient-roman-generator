/**
 * Roman Naming Conventions
 * https://en.wikipedia.org/wiki/Roman_naming_conventions
 */
import getAbbrvForName from './Abbrv';
import cognomina from './Cognomina';
import { masc_praenomina, femme_praenomina } from './Praenomina';

const selectFrom = (array) => {
  let random = Math.random();
  // Random returns [0-1);
  let index = Math.floor(random * array.length);
  return array[index];
}

class NameGenerator {

  /**
   * Cognomen
   * https://en.wikipedia.org/wiki/List_of_Roman_cognomina
   */
  generateCognomen() {
    return selectFrom(cognomina);
  }

  /**
   * Praenomen
   * https://en.wikipedia.org/wiki/Praenomen
   */
  generatePraenomen() {
    let femme = !!(Math.random() < 0.5);
    let sourceCollection = femme ? femme_praenomina : masc_praenomina;
    return selectFrom(sourceCollection);
  }

  generateNomen() {
    let praenomen = this.generatePraenomen();
    let cognomen = this.generateCognomen();
    let abbr = getAbbrvForName(praenomen);
    let name = abbr ? `${abbr}. (${praenomen}) ${cognomen}` : `${praenomen} ${cognomen}`;
    return name;
  }
}

export default NameGenerator;