import {Component} from '@angular/core';
import {SelectItemGroup} from "primeng/api";

interface Country {
  name: string,
  value: string
}

@Component({
  selector: 'app-compas-de-hierro',
  templateUrl: './compas-de-hierro.component.html',
  styleUrls: ['./compas-de-hierro.component.scss']
})
export class CompasDeHierroComponent {
  selectedCountry!: Country;
  groupedCities!: SelectItemGroup[];

  constructor() {
    this.groupedCities = [
      {
        label: 'Argentina',
        value: 'ar',
        items: [
          {label: 'Argentina', value: 'los_compas_de_argentina', disabled: true},
          {label: 'Alberti', value: 'loscompasdehierroalberti'},
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
        ]
      },
      {
        label: 'Chile',
        value: 'cl',
        items: [
          {label: 'Chile', value: 'los_compas_de_chile'},
        ]
      },
      {
        label: 'Colombia',
        value: 'co',
        items: [
          {label: 'Colombia', value: 'los_parceros_de_hierro_col'},
          {label: 'Armenia', value: 'parceros_de_hierro_armenia'},
          {label: 'Bogotá', value: 'compasdehierrobogota'},
          {label: 'Medellín', value: 'compasdehierromedellin'}, //parceros_de_hierro_medellin
          {label: 'Río Negro', value: 'parcerosdehierro_rionegro'},
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
          {label: 'Jalisco', value: 'loscompasdehierrojalisco'},
          {label: 'Guadalajara (Jalisco)', value: 'los_compas_de_hierro_gdl'},
          {label: 'León (Guanajuato)', value: 'los_compas_de_hierro_leon'},
          {label: 'La Paz (Baja California)', value: 'compas_de_hierro_lapaz'},
          {label: 'Monterrey (Nuevo León)', value: 'los_compas_del_cerro'}, //los_compas_del cerro_mty
          {label: 'Morelia (Michoacán)', value: 'los_compas_de_hierro_morelia'},
          {label: 'Querétaro', value: 'los_compas_de_hierro_qro', disabled: true}, //compasdehierro_qro
          {label: 'Pachuca (Hidalgo)', value: 'loscompasdehierropachuca', disabled: true},
          {label: 'Puebla', value: 'los_compas_de_hierro_puebla_'},
          {label: 'Atlixco (Puebla)', value: 'loscompas_de_hierro_atlixco'}, //no mencionan sede
          {label: 'San Luis Potosí', value: 'compas_slp'},
          {label: 'Tampico', value: 'loscompasdehierrotampico'}, //tribu_alfa_tampico / no especifican lugar de reunión
          {label: 'Tecate (Baja California)', value: 'los_compas_de_hierro_tkt'}, //no pude hallar el lugar que especifican en comentarios
          {label: 'Toluca (Estado de México)', value: 'compas_de_hierro_toluca_'},
          {label: 'Tuxtla Gutiérrez (Chiapas)', value: 'los_compas_de_hierro_tuxtla'}, //no especifica lugar de entrenamiento
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
          {label: 'Perú', value: 'los_causas_del_modo_guerra'},
        ]
      },
      {
        label: 'Puerto Rico',
        value: 'pr',
        items: [
          {label: 'Puerto Rico', value: 'los_compas_de_hierro_pr'},
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
          {label: 'República Dominicana', value: 'los_compas_de_hierro_do'},
        ]
      },
      {
        label: 'Uruguay',
        value: 'uy',
        items: [
          {label: 'Uruguay', value: 'los_compas_de_hierro_uruguay'},
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          {label: 'USA', value: 'los_compas_de_hierro_usa'},
          {label: 'Los Angeles', value: 'Los Angeles'},
          {label: 'New Jersey (New York)', value: 'los_compas_de_hierro_nj_ny'},
          {label: 'San Francisco', value: 'San Francisco'},
          {label: 'Denver', value: 'los_compas_de_hierro_colorado'}, //los_compas_de_hierro_denver //no entiendo cual es la sede oficial
          {label: 'Utah', value: 'los_compas_de_hierro_utah'}, //no especifican su sede
        ]
      },
      {
        label: 'Venezuela',
        value: 've',
        items: [
          {label: 'Venezuela', value: 'los_compas_de_hierro_venezuela'},
          {label: 'Caracas', value: 'compasdehierro.vnzla.caracas'}, //los_compas_de_hierro_caracas
        ]
      }
    ];
  }

  abreIgCompas(selectedCountry: Country) {
    console.log(selectedCountry);
    const url = `https://www.instagram.com/${selectedCountry.value}`;
    window.open(url, '_blank');
  }
}
