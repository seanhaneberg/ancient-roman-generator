/**
 * Roman Naming Conventions
 * https://en.wikipedia.org/wiki/Roman_naming_conventions
 */
import getAbbrvForName from './Abbrv';
import cognomina from './Cognomina';
import { masc_praenomina, femme_praenomina } from './Praenomina';
import agnomen from './Agnomen';
import AncientDate from './AncientDate';

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

  generateAgnomen() {
    let agnomenChance = !!(Math.random() < 0.5);
    if (agnomenChance) {
      let index = Math.floor(agnomen.length * Math.random());
      // send back a random name
      let nickname = agnomen[index];
      let formattedAgnomen = `${nickname.charAt(0).toUpperCase()}${nickname.slice(1)}`
      return formattedAgnomen
    } else {
      return null;
    }
  }

  generateDateOfBirth() {
    let date = new Date();
    let yearsSince = Math.floor(Math.random() * 1200);
    let ancientDate = new AncientDate(yearsSince, date);
    return ancientDate.getDateString();
  }

  generateNomen() {
    let praenomen = this.generatePraenomen();
    let cognomen = this.generateCognomen();
    let agnomen = this.generateAgnomen();
    let abbr = getAbbrvForName(praenomen);
    let name = abbr ? `${abbr}. (${praenomen}) ${cognomen} ${agnomen || ''}` : `${praenomen} ${cognomen} ${agnomen || ''}`;
    return name;
  }
}

export default NameGenerator;