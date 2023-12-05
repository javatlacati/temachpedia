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
          {label: 'Argentina', value: 'los_compas_de_argentina'},
          {label: 'Alberti', value: 'loscompasdehierroalberti'},
        ]
      },
      {
        label: 'Austria',
        value: 'at',
        items: [
          {label: 'Viena', value: 'el_compa_de_hierro_au'},
        ]
      },
      {
        label: 'Bolivia',
        value: 'bo',
        items: [
          {label: 'Amazonia', value: 'los_compas_de_hierro_amazonics'},
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
          {label: 'Medellín', value: 'parceros_de_hierro_medellin'},
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
          {label: 'Madrid', value: 'los_compas_de_hierro_madrid'},
        ]
      },
      {
        label: 'Francia',
        value: 'fr',
        items: [
          {label: 'Francia', value: 'los_compas_de_hierro_france'},
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
          {label: 'honduras', value: 'los_compas_de_honduras'},
          {label: 'quetzaltenango', value: 'compas_de_hierro_quetzaltenango'},
        ]
      },
      {
        label: 'Italia',
        value: 'it',
        items: [
          {label: 'Italia', value: 'los_compas_de_hierro_ita'},
        ]
      },
      {
        label: 'Irlanda',
        value: 'ie',
        items: [
          {label: 'Irlanda', value: 'los.compas.de.hierro_irlanda'},
        ]
      },
      {
        label: 'México',
        value: 'mx',
        items: [
          {label: 'Aguascalientes', value: 'los_compas_de_hierro_ags'},
          {label: 'Cancún (Quintana Roo)', value: 'los_compas_de_hierro_cancun'},
          {label: 'Chiapas', value: 'los_compas_de_hierro_chiapas'},
          {label: 'Ciudad de México', value: 'los_compas_de_hierro'},
          {label: 'Ciudad Juárez (Chihuahua)', value: 'compasdehierro_cdjuarez_chi'},
          {label: 'Jalisco', value: 'loscompasdehierrojalisco'},
          {label: 'Jalisco (Guadalajara)', value: 'los_compas_de_hierro_gdl'},
          {label: 'León (Guanajuato)', value: 'los_compas_de_hierro_leon'},
          {label: 'Baja California', value: 'los_compas_de_hierro_bcn'},
          {label: 'La Paz (Baja California)', value: 'compas_de_hierro_lapaz'},
          {label: 'Monterrey', value: 'los_compas_del cerro_mty'},
          {label: 'Morelia (Michoacán)', value: 'los_compas_de_hierro_morelia'},
          {label: 'Querétaro', value: 'los_compas_de_hierro_qro', disabled: true},
          {label: 'Pachuca (Hidalgo)', value: 'loscompasdehierropachuca'},
          {label: 'Puebla', value: 'los_compas_de_hierro_puebla'},
          {label: 'Puebla (Atlixco)', value: 'loscompas_de_hierro_atlixco'},
          {label: 'San Lui Potosí', value: 'compas_slp'},
          {label: 'Tampico', value: 'tribu_alfa_tampico'},
          {label: 'Tecate (Baja California)', value: 'los_compas_de_hierro_tkt'},
          {label: 'Toluca (Estado de México)', value: 'los_compas_de_hierro_toluca'},
          {label: 'Tuxtla Gutiérrez (Chiapas)', value: 'los_compas_de_hierro_tuxtla'},
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
          {label: 'USA', value: 'los-compas_de_hierro_usa'},
          {label: 'Los Angeles', value: 'Los Angeles'},
          {label: 'New Jersey (New York)', value: 'los_compas_de_hierro_nj_ny'},
          {label: 'San Francisco', value: 'San Francisco'},
          {label: 'Denver', value: 'los_compas_de_hierro_denver'},
          {label: 'Utah', value: 'los_compas_de_hierro_utah'},
        ]
      },
      {
        label: 'Venezuela',
        value: 've',
        items: [
          {label: 'Venezuela', value: 'los_compas_de_hierro_venezuela'},
          {label: 'Caracas', value: 'los_compas_de_hierro_caracas'},
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
