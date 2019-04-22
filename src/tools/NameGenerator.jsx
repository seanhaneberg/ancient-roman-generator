/**
 * Roman Naming Conventions
 * https://en.wikipedia.org/wiki/Roman_naming_conventions
 */
import cognomina from './Cognomina.jsx';

/**
 * Praenomen
 * https://en.wikipedia.org/wiki/Praenomen
 */
const masc_praenomina = [
  'Agrippa',
  'Appius',
  'Aulus',
  'Caeso',
  'Decimus',
  'Faustus',
  'Gaius',
  'Gnaeus',
  'Hostus',
  'Lucius',
  'Mamercus',
  'Manius',
  'Marcus',
  'Mettius',
  'Nonus',
  'Numerius',
  'Octavius',
  'Opiter',
  'Paullus',
  'Quintus',
  'Septimus',
  'Sertor',
  'Servius',
  'Sextus',
  'Spurius',
  'Statius',
  'Tiberius',
  'Titus',
  'Tullus',
  'Vibius',
  'Volesus',
  'Vopiscus'
];

const femme_praenomina = [
  'Appia',
  'Aula',
  'Caesula',
  'Decima',
  'Fausta',
  'Gaia',
  'Gnaea',
  'Hosta',
  'Lucia',
  'Maio',
  'Mamerca',
  'Mania',
  'Marcia',
  'Maxima',
  'Mettia',
  'Mino',
  'Nona',
  'Numeria',
  'Octavia',
  'Paulla',
  'Postuma',
  'Prima',
  'Procula',
  'Publia',
  'Quarta',
  'Quinta',
  'Secunda',
  'Septima',
  'Servia',
  'Sexta',
  'Spuria',
  'Statia',
  'Tertia',
  'Titia',
  'Tiberia',
  'Tulla',
  'Vibia',
  'Volusa',
  'Vopisca'
];


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
    let name = `${praenomen} ${cognomen}`;
    return name;
  }
}

export default NameGenerator;