class Name {
  constructor(praenomen, cognomen, abbrv) {
    this.praenomen = praenomen || null;
    this.cognomen = cognomen || null;
    this.abbrv = abbrv || null;
  }

  getPraenomen() {
    return this.praenomen;
  }

  getCognomen() {
    return this.cognomen;
  }

  getAbbrv() {
    return this.abbrv;
  }
}

export default Name;
