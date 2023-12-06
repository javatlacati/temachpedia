import {Component} from '@angular/core';
import {SelectItemGroup} from "primeng/api";
import * as Leaflet from 'leaflet';

interface Country {
  name: string,
  value: string
}

interface CellDetails {
  street: string;
  label: string;
  coords: { lng: number; lat: number }
}

interface CellLocation {
  cell_name: string;
  details: CellDetails[]
}

@Component({
  selector: 'app-compas-de-hierro',
  templateUrl: './compas-de-hierro.component.html',
  styleUrls: ['./compas-de-hierro.component.scss']
})
export class CompasDeHierroComponent {
  selectedCountry!: Country;
  groupedCities!: SelectItemGroup[];
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];

  private locations!: CellLocation[];

  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: {lat: 19.456492, lng: -99.1636326}
  }


  constructor() {
    this.groupedCities = [
      {
        label: 'Argentina',
        value: 'ar',
        items: [
          {label: 'Argentina', value: 'los_compas_del_hierro_arg'}, //los_compas_de_argentina
          {label: 'Alberti', value: 'loscompasdehierroalberti'},
          {label: 'Salta', value: 'los_compas_de_hierro_salta'},
        ]
      },
      {
        label: 'Austria',
        value: 'at',
        items: [
          {label: 'Viena', value: 'el_compa_de_hierro_au'}, //no especifica lugar de entrenamiento
        ]
      },
      {
        label: 'Bolivia',
        value: 'bo',
        items: [
          {label: 'Cobija', value: 'los_compas_de_hierro_amazonics'},
          {label: 'La Paz', value: 'compas_de_hierro_lapaz'},
          {label: 'Tarija', value: 'compas_de_hierro_tja'}, // parece que no tienen aún sede
        ]
      },
      {
        label: 'Chile',
        value: 'cl',
        items: [
          {label: 'Santiago', value: 'compas.de.hierro.chile.oficial'},
        ]
      },
      {
        label: 'Colombia',
        value: 'co',
        items: [
          {label: 'Colombia', value: 'los_parceros_de_hierro_col'},
          {label: 'Armenia', value: 'parceros_de_hierro_armenia'},
          {label: 'Barranquilla', value: 'cdh_baq'}, // parece que aún no tienen sede
          {label: 'Bogotá', value: 'compasdehierrobogota'},
          {label: 'Medellín', value: 'compasdehierromedellin'}, //parceros_de_hierro_medellin
          {label: 'Medellín', value: 'compas_de_medellin'}, //parece que aún no tienen sede
          {label: 'Río Negro', value: 'parcerosdehierro_rionegro'},
          {label: 'Pasto', value: 'compas_hierro_pasto'}, // parece que aún no tienen sede
          {label: 'Tunja', value: 'los_compas_de_hierro_tunja'},
        ]
      },
      {
        label: 'Costa Rica',
        value: 'cr',
        items: [
          {label: 'Costa Rica', value: 'los_compas_de_hierro_cr'},
        ]
      },
      {
        label: 'Dinamarca',
        value: 'dk',
        items: [
          {label: 'Copenhagen', value: 'los_compas_de_hierro_dk'}, // sin sede
        ]
      },
      {
        label: 'Ecuador',
        value: 'ec',
        items: [
          {label: 'Ecuador', value: 'compas_de_hierro_ecuador'},
        ]
      },
      {
        label: 'El Salvador',
        value: 'sv',
        items: [
          {label: 'El Salvador', value: 'los_compas_de_hierro_sv'},
        ]
      },
      {
        label: 'España',
        value: 'es',
        items: [
          {label: 'España', value: 'compas_de_hierro_es'},
          {label: 'Barcelona', value: 'los_compas_de_hierro_bcn'},
          {label: 'Madrid', value: 'los_compas_de_hierro_madrid'},
        ]
      },
      {
        label: 'Francia',
        value: 'fr',
        items: [
          {label: 'Francia', value: 'los_compas_de_hierro_france'}, //no especifica lugar de entrenamiento
        ]
      },
      {
        label: 'Guatemala',
        value: 'gt',
        items: [
          {label: 'Guatemala', value: 'compas_de_hierro_guatemala_ofi'},
        ]
      },
      {
        label: 'Honduras',
        value: 'hn',
        items: [
          {label: 'Honduras', value: 'los_compas_de_hierro_honduras'}, //los_compas_de_honduras
          {label: 'Quetzaltenango', value: 'compas_de_hierroquetzaltenango'},
        ]
      },
      {
        label: 'Italia',
        value: 'it',
        items: [
          {label: 'Italia', value: 'los_compas_de_hierro_ita'}, // no especifican lugar de entrenamiento
        ]
      },
      {
        label: 'Irlanda',
        value: 'ie',
        items: [
          {label: 'Dublín', value: 'los.compas.de.hierro_irlanda'},
        ]
      },
      {
        label: 'México',
        value: 'mx',
        items: [
          {label: 'Aguascalientes', value: 'los_compas_de_hierro_ags'},
          {label: 'Cancún (Quintana Roo)', value: 'los_compas_de_hierro_cancun'},
          {label: 'Chiapas', value: 'los_compas_de_hierro_chiapas'},// aún no hay sede por lo que parece
          {label: 'Ciudad de México (CDMX)', value: 'los_compas_de_hierro'},
          {label: 'Ciudad Juárez (Chihuahua)', value: 'compasdehierro_cdjuarez_chi'}, //no especifican sede
          {label: 'Durango', value: 'compas_hierro_durango_mx'}, //aún no tienen sede
          {label: 'Jalisco', value: 'loscompasdehierrojalisco'},
          {label: 'Guadalajara (Jalisco)', value: 'los_compas_de_hierro_gdl'},
          {label: 'Guadalajara (Jalisco)', value: 'barras_tribugdl_oficial'},
          {label: 'León (Guanajuato)', value: 'los_compas_de_hierro_leonn'}, //los_compas_de_hierro_leon
          {label: 'Monterrey (Nuevo León)', value: 'los_compas_del_cerro'}, //los_compas_del cerro_mty
          {label: 'Morelia (Michoacán)', value: 'los_compas_de_hierro_morelia'},
          {label: 'Nayarit', value: 'loscompasdehierronayarit'},
          {label: 'Oaxaca', value: 'loscompasdehierro_oaxaca'},
          {label: 'Querétaro', value: 'compas_de_hierro_queretaro'}, //compasdehierro_qro //los_compas_de_hierro_qro
          {label: 'Pachuca (Hidalgo)', value: 'loscompasdehierropachuca', disabled: true},
          {label: 'Puebla', value: 'los_compas_de_hierro_puebla_'},
          {label: 'Atlixco (Puebla)', value: 'loscompas_de_hierro_atlixco'}, //no mencionan sede
          {label: 'San Luis Potosí', value: 'compas_slp'},
          {label: 'Agua prieta (Sonora)', value: 'compas_de_hierro_agua_prieta'}, //hay ambigüedad en la ubicación de entrenamiento
          {label: 'Tamaulipas', value: 'compas_de_hierro_tamaulipas'},
          {label: 'Tampico', value: 'loscompasdehierrotampico'}, //tribu_alfa_tampico / no especifican lugar de reunión
          {label: 'Tecate (Baja California)', value: 'los_compas_de_hierro_tkt'}, //no pude hallar el lugar que especifican en comentarios
          {label: 'Tijuana (Baja California)', value: 'Los_compas_de_hierro_tijuana'},
          {label: 'Toluca (Estado de México)', value: 'compas_de_hierro_toluca_'},
          {label: 'Tuxtla Gutiérrez (Chiapas)', value: 'los_compas_de_hierro_tuxtla'}, //no especifica lugar de entrenamiento
          {label: 'Yucatán', value: 'compas_de_hierro_yucatan'}
        ]
      },
      {
        label: 'Panamá',
        value: 'pa',
        items: [
          {label: 'Panamá', value: 'compasdehierropanama'},
        ]
      },
      {
        label: 'Paraguay',
        value: 'py',
        items: [
          {label: 'Paraguay', value: 'loscompasdehierropy'},
        ]
      },
      {
        label: 'Perú',
        value: 'pe',
        items: [
          {label: 'Perú', value: 'los_compasdehierro_peru'}, //los_causas_del_modo_guerra
        ]
      },
      {
        label: 'Puerto Rico',
        value: 'pr',
        items: [
          {label: 'Puerto Rico', value: 'los_compas_de_hierro_pr'}, // parece que aún no tienen sede
        ]
      },
      {
        label: 'Portugal',
        value: 'pt',
        items: [
          {label: 'Lisboa', value: 'los_compas_de_hierro_lisboa'},
        ]
      },
      {
        label: 'República Dominicana',
        value: 'do',
        items: [
          {label: 'República Dominicana', value: 'compasdehierro_rd'},//los_compas_de_hierro_do // parece que aún no tienen sede
        ]
      },
      {
        label: 'Uruguay',
        value: 'uy',
        items: [
          {label: 'Uruguay', value: 'locompasdehierro.uruguay'}, //los_compas_de_hierro_uruguay // no tienen sede
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          {label: 'Dallas (Texas) - USA', value: 'los_compas_de_hierro_usa'},
          {label: 'California (California)', value: 'loscompasdehierrocalifornia'}, // no especifican sede
          {label: 'Chicago (Illinois)', value: 'compas_de_hierro_chicago_'},
          {label: 'Denver (Colorado)', value: 'los_compas_de_hierro_colorado'}, //los_compas_de_hierro_denver //no entiendo cual es la sede oficial
          {label: 'Houston (Texas)', value: 'los_compas_de_hierro.houston'},
          {label: 'New Jersey (New York)', value: 'los_compas_de_hierro_nj_ny'},
          {label: 'Utah', value: 'los_compas_de_hierro_utah'}, //no especifican su sede
        ]
      },
      {
        label: 'Venezuela',
        value: 've',
        items: [
          {label: 'Venezuela', value: 'los.compas.de.hierro.vnzla'}, //los_compas_de_hierro_venezuela
          {label: 'Caracas', value: 'compasdehierro.vnzla.caracas'}, //los_compas_de_hierro_caracas
        ]
      }
    ];

    this.locations = [{
      cell_name: "los_compas_de_hierro_usa",
      details: [{
        label: "Calisthenics Station White Rock Lake",
        street: "1178 Emerald Isle Dr, Dallas, TX 75218",
        coords: {lat: 32.8321052, lng: -96.7122009}
      }]
    },
      {
        cell_name: "loscompasdehierrojalisco",
        details: [{
          label: "Parque San Jacinto",
          street: "Av San Jacinto S/N, San Andrés, 44810 Guadalajara, Jal.",
          coords: {lat: 20.6631411, lng: -103.3002718}
        }]
      },
      {
        cell_name: "los_compas_de_hierro_tunja",
        details: [
          {
            label: "Estadio La Independencia",
            street: "32, Tunja, Boyacá, Colombia",
            coords: {lat: 5.5420772, lng: -73.355943}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_gdl",
        details: [
          {
            label: "Bosque Los Colomos",
            street: "C. El Chaco 3200, Providencia, 44630 Guadalajara, Jal.",
            coords: {lat: 20.7061182, lng: -103.4010889}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_honduras",
        details: [
          {
            label: "Villa Olímpica",
            street: "3RRP+7M6, Tegucigalpa, Francisco Morazán, Honduras",
            coords: {lat: 14.0901437, lng: -87.1668718}
          }
        ]
      },
      {
        cell_name: "compas_slp",
        details: [
          {
            label: "Parque Tangamanga 1",
            street: "Av. la Troje, Parque Tangamanga I, 78294 San Luis Potosí, S.L.P.",
            coords: {lat: 22.127485, lng: -101.0074534}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_puebla_",
        details: [
          {
            label: "Parque Ecológico",
            street: "Calle 24 Sur S/N, Azcarate, 72501 Heroica Puebla de Zaragoza, Pue.",
            coords: {lat: 19.0322957, lng: -98.1893368}
          }
        ]
      },
      {
        cell_name: "los_compas_del_cerro",
        details: [
          {
            label: "Ciudad Deportiva Churubusco",
            street: "Ing. Francisco Beltrán 4240, Sin Nombre de Col 21, 64560 Monterrey, N.L.",
            coords: {lat: 25.6884351, lng: -100.2729309}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_sv",
        details: [
          {
            label: "Parque Cuscatlán",
            street: "25 Avenida Sur y, Alameda Franklin Delano Roosevelt, San Salvador, El Salvador",
            coords: {lat: 13.6987112, lng: -89.209239}
          }
        ]
      },
      {
        cell_name: "compasdehierromedellin",
        details: [
          {
            label: "Estadio de Fútbol Atanasio Girardot",
            street: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia, Colombia",
            coords: {lat: 6.256767, lng: -75.5927478}
          }
        ]
      },
      {
        cell_name: "parceros_de_hierro_armenia",
        details: [
          {
            label: "Polideportivo Universidad del Quindío",
            street: "Cra. 15 #15 Norte-1 a 15 Norte-25, Armenia, Quindío, Colombia",
            coords: {lat: 4.5553959, lng: -75.660572}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_ecuador",
        details: [
          {
            label: "Fundeporte",
            street: "PC8W+H85, Quito 170146, Ecuador",
            coords: {lat: -0.2840863, lng: -78.5534297}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_cr",
        details: [
          {
            label: "Parque Finsa, Sabana Sur",
            street: "WVJR+4QJ, San José, Las Vegas, Costa Rica",
            coords: {lat: 9.9301885, lng: -84.108969}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_ags",
        details: [
          {
            label: "Barras de ejercicios IDEA",
            street: "IV Centenario, Desarrollo Especial Parque IV Centenario, 20190 Aguascalientes, Ags.",
            coords: {lat: 21.8798353, lng: -102.2690897}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_toluca_",
        details: [
          {
            label: "Parque Metropolitano Bicentenario",
            street: "Av. Paseo Tollocan s/n, Universidad, 50130 Toluca de Lerdo, Méx.",
            coords: {lat: 19.2703619, lng: -99.6555035}
          }
        ]
      },
      {
        cell_name: "compasdehierro.vnzla.caracas",
        details: [
          {
            label: "DISTRITO VILLAGE",
            street: "Av. Luis Roche, con Transversal 5, Miranda, Venezuela",
            coords: {lat: 10.5025213, lng: -66.8487238}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_cancun",
        details: [
          {
            label: "Parque Kilometro 0",
            street: "Blvd. Kukulcan, Puerto Juarez, Zona Hotelera, 77500 Cancún, Q.R.",
            coords: {lat: 21.156692, lng: -86.8233397}
          }
        ]
      },
      {
        cell_name: "parcerosdehierro_rionegro",
        details: [
          {
            label: "Parque Principal Rionegro Antioquia",
            street: "a 49-59, Cra 50 #49-1, Rionegro, Antioquia, Colombia",
            coords: {lat: 6.1535504, lng: -75.3765129}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_guatemala_ofi",
        details: [
          {
            label: "Campo Marte",
            street: "36 Avenida 27y, Cdad. de Guatemala 01010, Guatemala",
            coords: {lat: 14.6157046, lng: -90.509519}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_es",
        details: [
          {
            label: "Gimnasio exterior",
            street: "Pg. Marítim de la Barceloneta, 17, 08003 Barcelona, España",
            coords: {lat: 41.3814265, lng: 2.1922586}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_bcn",
        details: [
          {
            label: "Calistenia Parque de les Planes",
            street: "08905 L'Hospitalet de Llobregat, Barcelona, España",
            coords: {lat: 41.3657706, lng: 2.085946}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_nj_ny",
        details: [
          {
            label: "Lincoln Park",
            street: "1 County Rd 605, Jersey City, NJ 07304, Estados Unidos",
            coords: {lat: 40.7774356, lng: -74.0456996}
          }
        ]
      },
      {
        cell_name: "compas_de_hierroquetzaltenango",
        details: [
          {
            label: "Complejo Deportivo",
            street: "4a Calle 26-27, Quezaltenango, Guatemala",
            coords: {lat: 14.8463823, lng: -91.5309402}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_madrid",
        details: [
          {
            label: "Parque de El Retiro",
            street: "Parque del Retiro, 28009 Madrid, España",
            coords: {lat: 40.4150972, lng: -3.6851188}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_amazonics",
        details: [
          {
            label: "Parque Piñata",
            street: "Av 9 de Febrero, Cobija, Bolivia",
            coords: {lat: -11.0301392, lng: -68.7650612}
          }
        ]
      },
      {
        cell_name: "los.compas.de.hierro_irlanda",
        details: [
          {
            label: "Parque Fénix",
            street: "Phoenix Park, Dublin, Irlanda",
            coords: {lat: 53.3431735, lng: -6.3254826}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_lisboa",
        details: [
          {
            label: "Calisthenics Park",
            street: "R. Chen He, 1990-513 Lisboa, Portugal",
            coords: {lat: 38.7879463, lng: -9.095305}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro",
        details: [
          {
            label: "Barras Naucalli",
            street: "FQV4+6R, Manzana 020, 53150 Naucalpan de Juárez, Méx.",
            coords: {lat: 19.4908762, lng: -99.2441552}
          },
          {
            label: "Barras Insurgentes \"Los Compas de Hierro\"",
            street: "Av Chapultepec 276, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX",
            coords: {lat: 19.456492, lng: -99.1636326}
          },
          {
            label: "Barras Chapultepec",
            street: "Bosque de Chapultepec II Secc, Miguel Hidalgo, 11100 Ciudad de México, CDMX",
            coords: {lat: 19.4145354, lng: -99.2031567}
          }
        ]
      },
      {
        cell_name: "compas.de.hierro.chile.oficial",
        details: [
          {
            label: "Barras. Gral. Bustamante",
            street: "Grindoor Growshop Tienda online - Av. Gral. Bustamante, Providencia, Región Metropolitana, Chile",
            coords: {lat: -33.4426487, lng: -70.6346539}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_queretaro",
        details: [
          {
            label: "Parque Alcanfores Norte",
            street: "Gustavo Adolfo Bécquer, Parque los Alcanfores Secc Nte, 76156 Santiago de Querétaro, Qro.",
            coords: {lat: 20.6022462, lng: -100.4046944}
          }
        ]
      }, {
        cell_name: "los_compas_de_hierro_leonn",
        details: [
          {
            label: "Parque calistenia",
            street: "58Q6+5Q Parque Metropolitano de León, 37138 El Molino Residencial, Gto.",
            coords: {lat: 21.1878706, lng: -101.6878448}
          },
          {
            label: "Parque bosques",
            street: "C. Historiadores 961, El Granjeno Sur, 37550 León de los Aldama, Gto.",
            coords: {lat: 21.0849201, lng: -101.6607031}
          }
        ]
      },
      {
        cell_name: "los_compasdehierro_peru",
        details: [
          {
            label: "Campo de Marte",
            street: "Jesús María 15072, Lima, Perú",
            coords: {lat: -12.0683312, lng: -77.0439599}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_salta",
        details: [
          {
            label: "Av. Reyes Catolicos y Los Algarrobos - Segunda Rotonda de Tres Cerritos",
            street: "6JQ2+2F Salta, Argentina",
            coords: {lat: -24.7624565, lng: -65.4014463}
          }
        ]
      },
      {
        cell_name: "Los_compas_de_hierro_tijuana",
        details: [
          {
            label: "Parque Morelos",
            street: "Av de los Insurgentes 16000, Guadalajara, 22105 Tijuana, B.C.",
            coords: {lat: 32.4987248, lng: -116.9376456}
          }
        ]
      },
      {
        cell_name: "barras_tribugdl_oficial",
        details: [
          {
            label: "Parque San Rafael",
            street: "Ciencias 2844, San Rafael, 44810 Guadalajara, Jal.",
            coords: {lat: 20.6526963, lng: -103.300436}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro_morelia",
        details: [
          {
            label: "Bosque Lázaro Cárdenas",
            street: "Perif. Paseo de la República s/n, Bosque Camelinas, 58290 Morelia, Mich.",
            coords: {lat: 19.6813578, lng: -101.1800012}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_yucatan",
        details: [
          {
            label: "Parque Recreativo de Oriente",
            street: "C. 55 671, Fraccionamiento del Parque, 97160 Mérida, Yuc.",
            coords: {lat: 20.9693862, lng: -89.5886678}
          }
        ]
      },
      {
        cell_name: "los_compas_de_hierro.houston",
        details: [{
          label: "The Water Works in Buffalo Bayou Park",
          street: "105 Sabine St, Houston, TX 77007, Estados Unidos",
          coords: {lat: 29.7622118, lng: -95.3810105}
        }]
      },
      {
        cell_name: "loscompasdehierro_oaxaca",
        details: [
          {
            label: "Parque El Tequio",
            street: "277H+V5 Santa Cruz Xoxocotlán, Oaxaca",
            coords: {lat: 17.006485, lng: -96.7196561}
          }
        ]
      },
      {
        cell_name: "compas_de_hierro_chicago_",
        details: [
          {
            label: "2501 Highland Park Dr",
            street: "2501 Highland Park Dr, Joliet, IL 60432, Estados Unidos",
            coords: {lat: 41.5327832, lng: -88.0234737}
          }
        ]
      }
    ];
  }

  abreIgCompas(selectedCountry: Country) {
    console.log(selectedCountry);
    const url = `https://www.instagram.com/${selectedCountry.value}`;
    window.open(url, '_blank');
  }

  initMarkers() {

    for (let index = 0; index < this.locations.length; index++) {
      const data = this.locations[index];
      for (let j = 0; j < data.details.length; j++) {
        const marker = this.generateMarker(data.details[j].coords, index);
        marker.addTo(this.map).bindPopup(`<b>${data.details[j].label}</b><br><br>${data.details[j].street}<br><br><a href="https://www.instagram.com/${data.cell_name}" target="_blank"><span class="pi pi-instagram"></span></a>`);
        // this.map.panTo(data.position);
        this.markers.push(marker)
      }
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data, {draggable: data.draggable})
    // .on('click', (event) => this.markerClicked(event, index))
    // .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  onMapReady($event: Leaflet.Map) {
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    });
    this.map = $event;
    this.initMarkers();
  }
}
