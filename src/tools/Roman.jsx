import getAbbrvForName from './Abbrv';

class Roman {
  constructor(name, birthday, age, femme, hill) {

    this.praenomen = name.praenomen;
    this.abbrv = getAbbrvForName(this.praenomen);
    this.cognomen = name.cognomen;
    this.agnomen = name.agnomen;
    this.birthday = birthday;
    this.age = age;
    this.femme = !!femme;
    this.hill = hill;
  }

  getPraenomen() {
    return this.praenomen;
  }

  getAbbrv() {
    return this.abbrv;
  }

  getCognomen() {
    return this.cognomen;
  }

  getNameString() {
    return this.abbr ?
          `${this.abbr}. (${this.praenomen}) ${this.cognomen} ${this.agnomen || ''}` :
          `${this.praenomen} ${this.cognomen} ${this.agnomen || ''}`;
  }

  getBirthdayString() {
    return this.birthday;
  }

  getAge() {
    return this.age;
  }

  getFemme() {
    return this.femme;
  }

  getFemmeString() {
    return this.femme ? '♀' : '♂';
  }

  getHillName() {
    return this.hill;
  }
}

export default Roman;