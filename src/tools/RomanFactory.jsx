/**
 * Roman Naming Conventions
 * https://en.wikipedia.org/wiki/Roman_naming_conventions
 */
import cognomina from './Cognomina';
import { masc_praenomina, femme_praenomina } from './Praenomina';
import agnomen from './Agnomen';
import AncientDate from './AncientDate';
import Roman from './Roman';

const baseYear = -800;
const rangeOfBirthYears = 1200;
const oldestAge = 90;

const selectFrom = (array) => {
  let random = Math.random();
  // Random returns [0-1);
  let index = Math.floor(random * array.length);
  return array[index];
}

class RomanFactory {

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
  generatePraenomen(femme) {
    let sourceCollection = femme ? femme_praenomina : masc_praenomina;
    return selectFrom(sourceCollection);
  }

  generateFemme() {
    return !!(Math.random() < 0.5);
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
    let yearsSince = Math.floor(Math.random() * rangeOfBirthYears);
    let ancientDate = new AncientDate(baseYear, yearsSince, date);
    return ancientDate.getDateString();
  }

  generateNomen(femme) {
    let name = {
      praenomen: this.generatePraenomen(femme),
      cognomen: this.generateCognomen(),
      agnomen: this.generateAgnomen(),
    };
    return name;
  }

  generateAge() {
    return Math.floor(Math.random() * oldestAge);
  }

  generateRoman() {
    let femme = this.generateFemme();
    let name = this.generateNomen(femme);
    let roman = new Roman(name, this.generateDateOfBirth(), this.generateAge(), femme);
    return roman;
  }
}

export default RomanFactory;
