import {Injectable} from '@angular/core';
import {Lyric} from "../model/Lyric";

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  private _lyrics: Lyric[] = [
    {
      "title": "Cuestión de Vida",
      "authors": [
        "White Shit State"
      ],
      "paragraphs": [
        {
          "verses": [
            "Despierto con el cansancio del pasado",
            "Los dolores del presente, del futuro ni hablamos",
            "Con un peso en el pecho que no deja respirar, los",
            "Problemas en la cabeza, y el celular sonando"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Y ya es normal, en ésta realidad",
            "Donde el cielo es el infierno, y el infierno es de verdad",
            "Despertar, sin poder anticipar",
            "La ruleta de la vida que da vueltas sin parar,"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Inicia el día, hay cosas que no estoy entendiendo",
            "Y cosas que no entendía pero entiendo día a día",
            "El dolor y sufrimiento se van yendo",
            "Pero queda la desidia"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Los planes son inciertos, las ansias van creciendo",
            "Los motivos no motivan,",
            "Y el tiempo no se olvida",
            "De la esperanza a la deriva"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Las nuevas noticias no son buenas",
            "Las buenas noticias brillan por su ausencia",
            "Guerra lejos, guerra cerca",
            "Dolor ajeno, frustración y mucha indiferencia"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Separaciones, uniones sin razones",
            "Mucha violencia en sus normalizaciones",
            "Un tren desbocado sin rumbo y sin estaciones",
            "Es la humanidad que no entiende razones"
          ],
          "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Respira,",
            "el que se enoja pierde y al que pierde le olvidan",
            "Después de la tormenta la cosa estará tranquila",
            "Sigue caminando esta noche fría"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "La luz de la mañana te dará la bienvenida",
            "Y el destino habrá valido la partida",
            "El alma cansada, pero no vacía",
            "Estará llena de amor, de experiencia y alegrías"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Voy de noche a caminar",
            "Un sendero mas tranquilo",
            "Y al llegar a mi destino",
            "Luz habrá, Luz habrá"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Cierra los ojos, descansa un momento",
            "Se acerca el tiempo de dar el segundo aliento",
            "Piensa en el presente, disfruta el sentimiento",
            "Porque no es cuestión de suerte, es cuestión de intentos"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Es cuestión de avance constante,",
            "Más de colocar los golpes, no nada más de pegarle",
            "Cuestión de hacer camino como cualquier caminante",
            "A base de caminarle"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Con la mirada siempre en busca de lunas perdidas",
            "El alma llena, las bolsas casi vacías",
            "Suela gastada, ropa sencilla",
            "Sangre caliente y la mente fría"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Paso seguro en el camino de la vida",
            "Para evitar los resbalones y caídas",
            "Ten la voluntad libre y las ideas comprometidas",
            "Mantén el corazón en paz y armonía"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "El mundo intentará quebrarte y destrozarte",
            "Pero solamente lograrán fortalecerte",
            "Muchos querrán usarte y engañarte",
            "Y cada día tendrás que defenderte"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Los planes como panes verás desmoronarse",
            "La vida cambiará y no entenderás las realidades",
            "El mundo trastocado no parecerá verdad",
            "Y por cada paso dado terminarás tres atrás"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Respira otra vez",
            "Aunque parezca que el mundo gira al revés",
            "Afina la puntería, asienta bien los pies",
            "Dispara primero y pregunta después"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "No detengas tus pasos después de las caídas",
            "Ni las batallas antes de tiempo des por vencidas",
            "La llama en tu mirada estará más encendida",
            "Si durante la noche resiste la llovizna"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        },
        {
          "verses": [
            "Voy de noche a caminar",
            "Un sendero más tranquilo",
            "Y al llegar a mi destino",
            "Luz habrá, luz habrá"
          ], "chords": [
            {
              "lines": [
                {
                  "chordName": "Dm7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "Am7",
                  "spacesBefore": 2
                }
              ]
            },
            {
              "lines": [
                {
                  "chordName": "F",
                  "spacesBefore": 2
                }
              ]
            },
            {
              lines: [
                {
                  chordName: "E7",
                  spacesBefore: 2
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  constructor() {
  }


  get lyrics(): Lyric[] {
    return this._lyrics;
  }

  set lyrics(value: Lyric[]) {
    this._lyrics = value;
  }

  getSongBytitle(title: string) {
    return this._lyrics.find(song => song.title === title);
  }
}
