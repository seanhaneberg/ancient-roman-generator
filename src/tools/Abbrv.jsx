/**
 * Abbreviations
 * https://en.wikipedia.org/wiki/Praenomen
 */
const abbreviations = [
  ['Agrippa',       'Agr' ],
  ['Appia',         'Ap'  ],
  ['Appius',        'Ap'  ],
  ['Aula',          'A'   ],
  ['Aulus',         'A'   ],
  ['Caeso',         'K'   ],
  ['Decima',        'D'   ],
  ['Decimus',       'D'   ],
  ['Fausta',        'F'   ],
  ['Faustus',       'F'   ],
  ['Gaia',          'C'   ],
  ['Gaius',         'C'   ],
  ['Gnaea',         'Cn'  ],
  ['Gnaeus',        'Cn'  ],
  ['Hosta',         'H'   ],
  ['Hostus',        'H'   ],
  ['Lucia',         'L'   ],
  ['Lucius',        'L'   ],
  ['Maio',          'Mai' ],
  ['Mamerca',       'Mam' ],
  ['Mamercus',      'Mam' ],
  ['Mania',         'ꟿ'  ],
  ['Manius',        'ꟿ'  ],
  ['Marcia',        'M'   ],
  ['Marcus',        'M'   ],
  ['Mino',          'Min' ],
  ['Numeria',       'N'   ],
  ['Numerius',      'N'   ],
  ['Octavia',       'Oct' ],
  ['Octavius',      'Oct' ],
  ['Opiter',        'Opet'],
  ['Postuma',       'Post'],
  ['Postumus',      'Post'],
  ['Procula',       'Pro' ],
  ['Proculus',      'Pro' ],
  ['Publia',        'P'   ],
  ['Publius',       'P'   ],
  ['Quinta',        'Q'   ],
  ['Quintus',       'Q'   ],
  ['Secunda',       'Seq' ],
  ['Sertor',        'Sert'],
  ['Servia',        'Ser' ],
  ['Servius',       'Ser' ],
  ['Sexta',         'Sex' ],
  ['Sextus',        'Sex' ],
  ['Spuria',        'S'   ],
  ['Spurius',       'S'   ],
  ['Statia',        'St'  ],
  ['Statius',       'St'  ],
  ['Tetia',         'T'   ],
  ['Tiberia',       'Ti'  ],
  ['Tiberius',      'Ti'  ],
  ['Titus',         'T'   ],
  ['Vibia',         'V'   ],
  ['Vibius',        'V'   ],
  ['Volesus',       'Vol' ],
  ['Volusa',        'Vol' ],
  ['Vopisca',       'Vop' ],
  ['Vopiscus',      'Vop' ],
];

function getAbbrvForName(name) {
  let abbr = null
  abbreviations.map((entry) => {
    if (entry[0] === name) {
      abbr = entry[1];
    }
    return null;
  });

  return abbr;
}

export default getAbbrvForName;