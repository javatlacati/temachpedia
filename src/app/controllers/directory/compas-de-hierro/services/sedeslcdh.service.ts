import { Injectable } from '@angular/core';
import { type SelectItemGroupThreeValues } from '../model/SelectItemGroupThreeValues';
import { type CellLocation } from '../model/CellLocation';
import { SelectItemThreeValuesImpl } from '../model/SelectItemThreeValues';

@Injectable({
  providedIn: 'root',
})
export class SedeslcdhService {
  constructor() {
    this._groupedCities = [
      {
        label: 'Argentina',
        value: 'ar',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Buenos Aires - Argentina',
            value: 'los_compas_del_hierro_arg',
            value2: false,
          }), // los_compas_de_argentina
          new SelectItemThreeValuesImpl({
            label: 'Alberti',
            value: 'loscompasdehierroalberti',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Córdoba',
            value: 'compas_de_hierro_cordoba',
            value2: true,
          }), // compas_de_hierro_arg.cordoba
          new SelectItemThreeValuesImpl({
            label: 'Córdoba',
            value: 'loscompasdehierro.cordoba',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Córdoba',
            value: 'compas.de.hierro',
            value2: false,
          }),
          // new SelectItemThreeValuesImpl({
          //   label: 'Jujuy',
          //   value: 'los_compas_de_hierro_jujuy_arg',
          //   value2: false,
          // }), // parece que no tienen sede y la cuenta desapareció
          new SelectItemThreeValuesImpl({
            label: 'Mar del plata',
            value: 'los_compas_de_hierro_mdq',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Mendoza',
            value: 'loscompasdehierro.mza.arg',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Salta',
            value: 'los_compas_de_hierro_salta',
            value2: false,
          }),
        ],
      },
      {
        label: 'Austria',
        value: 'at',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Viena',
            value: 'el_compa_de_hierro_au',
            value2: false,
          }), // no especifica lugar de entrenamiento
        ],
      },
      {
        label: 'Bélgica',
        value: 'be',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Bélgica',
            value: 'los_compas_de_hierro_belgica',
            value2: false,
          }),
        ],
      },
      {
        label: 'Bolivia',
        value: 'bo',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Cobija',
            value: 'los_compas_de_hierro_amazonics',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Cochabamba',
            value: 'compas.de.hierro.cochabamba1',
            value1: 'profile.php?id=61554942335736',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'La Paz',
            value: 'compas_de_hierro_lapaz',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'La Paz',
            value: 'compas.de.hierro.lapaz',
            value1: 'profile.php?id=61552237851069',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Tarija',
            value: 'compas_de_hierro_tja',
            value2: false,
          }), // parece que no tienen aún sede
        ],
      },
      {
        label: 'Canada',
        value: 'ca',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Toronto (Ontario)',
            value: 'compas_dehielo_toronto',
            value2: false,
          }),
        ],
      },
      {
        label: 'Chile',
        value: 'cl',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Santiago',
            value: 'compas.de.hierro.chile.oficial',
            value2: true,
          }),
        ],
      },
      {
        label: 'Colombia',
        value: 'co',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Colombia',
            value: 'los_parceros_de_hierro_col',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Armenia',
            value: 'parceros_de_hierro_armenia',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({ label: 'Barranquilla', value: 'cdh_baq', value2: false }), // parece que aún no tienen sede
          new SelectItemThreeValuesImpl({
            label: 'Bogotá',
            value: 'compasdehierrobogota',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Bogotá',
            value: 'estoicos_de_hierro_bogota',
            value1: 'groups/318263317295828',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Cali',
            value: 'loscompasdehierrocali',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Manizales',
            value: 'parceros_de_hierro_manizales',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Medellín',
            value: 'compasdehierromedellin',
            value2: true,
          }), // parceros_de_hierro_medellin
          new SelectItemThreeValuesImpl({
            label: 'Medellín',
            value: 'compas_de_medellin',
            value2: false,
          }), // parece que aún no tienen sede
          new SelectItemThreeValuesImpl({
            label: 'Ocaña',
            value: 'parceros_de_hierro_ocana',
            value1: 'profile.php?id=100094286907714',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Río Negro',
            value: 'parcerosdehierro_rionegro',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Pasto',
            value: 'compas_hierro_pasto',
            value2: false,
          }), // parece que aún no tienen sede
          new SelectItemThreeValuesImpl({
            label: 'Pereira',
            value: 'compas_hierro_pasto',
            value2: false,
          }), // parece que aún no tienen sede
          new SelectItemThreeValuesImpl({
            label: 'Tunja',
            value: 'los_compas_de_hierro_tunja',
            value2: true,
          }),
        ],
      },
      {
        label: 'Costa Rica',
        value: 'cr',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Costa Rica',
            value: 'los_compas_de_hierro_costarica',
            value2: true,
          }),
        ],
      },
      {
        label: 'Dinamarca',
        value: 'dk',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Copenhagen',
            value: 'los_compas_de_hierro_dk',
            value2: false,
          }), // sin sede
        ],
      },
      {
        label: 'Ecuador',
        value: 'ec',
        items: [
          new SelectItemThreeValuesImpl({ label: 'Cuenca', value: 'cdhcuenca', value2: true }),
          new SelectItemThreeValuesImpl({
            label: 'Ecuador',
            value: 'compas_de_hierro_ecuador',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Guayaquil',
            value: 'compasdehierroguayaquil',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Ibarra',
            value: 'cdh.ibarra.ecuador',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Quevedo',
            value: 'compas_de_hierro_qvdo_ecu',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Quito norte',
            value: 'lcdh.quitonorte',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Quito sur',
            value: 'cdh_quitosur',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Puyo',
            value: 'compasdehierropuyo',
            value2: true,
          }), // no tienen sede aún
        ],
      },
      {
        label: 'El Salvador',
        value: 'sv',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'El Salvador',
            value: 'los_compas_de_hierro_sv',
            value1: 'los.compas.de.hierro.sv',
            value2: true,
          }),
        ],
      },
      {
        label: 'España',
        value: 'es',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'España',
            value: 'compas_de_hierro_es',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Barcelona',
            value: 'los_compas_de_hierro_bcn',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Madrid',
            value: 'los_compas_de_hierro_madrid',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Murcia',
            value: 'los_compas_de_hierro_cartagena',
            value2: true,
          }), // aún no tienen sede registrada
        ],
      },
      {
        label: 'Francia',
        value: 'fr',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Francia',
            value: 'los_compas_de_hierro_france',
            value2: false,
          }), // no especifica lugar de entrenamiento
        ],
      },
      {
        label: 'Guatemala',
        value: 'gt',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Guatemala',
            value: 'compas_de_hierro_guatemala_ofi',
            value1: 'profile.php?id=100092460303718',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Quetzaltenango',
            value: 'compas_de_hierroquetzaltenango',
            value1: 'profile.php?id=100092460303718',
            value2: true,
          }),
        ],
      },
      {
        label: 'Honduras',
        value: 'hn',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Honduras',
            value: 'los_compas_de_hierro_honduras',
            value2: true,
          }), // los_compas_de_honduras
          new SelectItemThreeValuesImpl({
            label: 'Roatán',
            value: 'los_compas_de_hierro_hn_roatan',
            value2: true,
          }),
        ],
      },
      {
        label: 'Italia',
        value: 'it',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Italia',
            value: 'los_compas_de_hierro_ita',
            value2: true,
          }), // no especifican lugar de entrenamiento
        ],
      },
      {
        label: 'Irlanda',
        value: 'ie',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Dublín',
            value: 'los.compas.de.hierro_irlanda',
            value2: false,
          }),
        ],
      },
      {
        label: 'México',
        value: 'mx',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Aguascalientes',
            value: 'los_compas_de_hierro_ags',
            value1: 'Loscompasdehierroaguascalientes',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Agua prieta (Sonora)',
            value: 'compas_de_hierro_agua_prieta',
            value2: false,
          }), // hay ambigüedad en la ubicación de entrenamiento
          new SelectItemThreeValuesImpl({
            label: 'Atlixco (Puebla)',
            value: 'loscompas_de_hierro_atlixco',
            value2: false,
          }), // no mencionan sede
          new SelectItemThreeValuesImpl({
            label: 'Cancún (Quintana Roo)',
            value: 'los_compas_de_hierro_cancun',
            value1: 'profile.php?id=100092573765968',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Chiapas',
            value: 'los_compas_de_hierro_chiapas',
            value2: false,
          }), // aún no hay sede por lo que parece
          new SelectItemThreeValuesImpl({
            label: 'Chihuahua',
            value: 'los_compas_de_hierro_chihuahua',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Ciudad de México (CDMX)',
            value: 'los_compas_de_hierro',
            value1: 'loscompasdehierro',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Ciudad Juárez (Chihuahua)',
            value: 'compasdehierro_cdjuarez_chi',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Durango',
            value: 'compas_hierro_durango_mx',
            value2: false,
          }), // aún no tienen sede
          new SelectItemThreeValuesImpl({
            label: 'Guadalajara (Jalisco)',
            value: 'loscompasdehierrojalisco',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Guadalajara (Jalisco)',
            value: 'los_compas_de_hierro_gdl',
            value1: 'profile.php?id=61557266551592',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Guadalajara (Jalisco)',
            value: 'barras_tribugdl_oficial',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Irapuato (Guanajuato)',
            value: 'los_compas_de_hierro_irapuato',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'León (Guanajuato)',
            value: 'los_compas_de_hierro_leonn',
            value2: true,
          }), // los_compas_de_hierro_leon
          new SelectItemThreeValuesImpl({
            label: 'Monterrey (Nuevo León)',
            value: 'los_compas_del_cerro',
            value1: 'profile.php?id=100090523121637',
            value2: true,
          }), // los_compas_del cerro_mty
          new SelectItemThreeValuesImpl({
            label: 'Morelia (Michoacán)',
            value: 'los_compas_de_hierro_morelia',
            value1: 'profile.php?id=61550607760712',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Nayarit',
            value: 'loscompasdehierronayarit',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Oaxaca',
            value: 'loscompasdehierro_oaxaca',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Querétaro',
            value: 'compas_de_hierro_queretaro',
            value2: true,
          }), // compasdehierro_qro //los_compas_de_hierro_qro
          new SelectItemThreeValuesImpl({
            label: 'Pachuca (Hidalgo)',
            value: 'lcdh_hidalgo_oficial',
            value2: true,
          }), // loscompasdehierropachuca
          new SelectItemThreeValuesImpl({
            label: 'Puebla',
            value: 'los_compas_de_hierro_puebla_',
            value2: true,
          }), // los_compas_de_hierro_puebl
          new SelectItemThreeValuesImpl({
            label: 'Puebla',
            value: 'modo_guerra_puebla',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Puerto Peñasco (Sonora)',
            value: 'los_compas_del_desierto',
            value2: true,
          }), // los_compas_del_desierto
          new SelectItemThreeValuesImpl({
            label: 'San Luis Potosí',
            value: 'compas_slp',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Tamaulipas',
            value: 'compas_de_hierro_tamaulipas',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Tampico (Tamaulipas)',
            value: 'loscompasdehierrotampico',
            value2: true,
          }), // tribu_alfa_tampico / no especifican lugar de reunión
          new SelectItemThreeValuesImpl({
            label: 'Tecate (Baja California)',
            value: 'los_compas_de_hierro_tkt',
            value2: false,
          }), // no pude hallar el lugar que especifican en comentarios
          new SelectItemThreeValuesImpl({
            label: 'Tijuana (Baja California)',
            value: 'Los_compas_de_hierro_tijuana',
            value1: 'loscompasdehierrotijuana',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Tlaxcala',
            value: 'los_compas_de_hierro_tlaxcala',
            value1: 'profile.php?id=100090918352127',
            value2: true,
          }), // los_compas_de_hierro_tlaxcal
          new SelectItemThreeValuesImpl({
            label: 'Toluca (Estado de México)',
            value: 'compas_de_hierro_toluca_',
            value1: 'profile.php?id=61557714384078',
            value2: true,
          }), // los_compas_de_hierro_toluca
          new SelectItemThreeValuesImpl({
            label: 'Torreón (Coahuila)',
            value: 'los_laguneros_de_hierro',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Tuxtla Gutiérrez (Chiapas)',
            value: 'los_compas_de_hierro_tuxtla',
            value1: 'profile.php?id=61553570339494',
            value2: true,
          }), // no especifica lugar de entrenamiento
          new SelectItemThreeValuesImpl({
            label: 'Yucatán',
            value: 'compas_de_hierro_yucatan',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Zacatecas',
            value: 'los_compas_de_hierro_zacatecas',
            value2: false,
          }),
        ],
      },
      {
        label: 'Panamá',
        value: 'pa',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Panamá',
            value: 'compasdehierropanama',
            value2: false,
          }),
        ],
      },
      {
        label: 'Paraguay',
        value: 'py',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Paraguay',
            value: 'loscompasdehierropy',
            value1: 'profile.php?id=61555469100778',
            value2: true,
          }),
        ],
      },
      {
        label: 'Perú',
        value: 'pe',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Perú',
            value: 'los_compasdehierro_peru',
            value2: false,
          }), // los_causas_del_modo_guerra
        ],
      },
      {
        label: 'Puerto Rico',
        value: 'pr',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Puerto Rico',
            value: 'los_compas_de_hierro_pr',
            value2: false,
          }), // parece que aún no tienen sede
        ],
      },
      {
        label: 'Portugal',
        value: 'pt',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Lisboa',
            value: 'los_compas_de_hierro_lisboa',
            value2: false,
          }),
        ],
      },
      {
        label: 'República Dominicana',
        value: 'do',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'República Dominicana',
            value: 'compasdehierro_rd',
            value2: false,
          }), // los_compas_de_hierro_do // parece que aún no tienen sede
        ],
      },
      {
        label: 'Uruguay',
        value: 'uy',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Uruguay',
            value: 'locompasdehierro.uruguay',
            value2: false,
          }), // los_compas_de_hierro_uruguay // no tienen sede
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Dallas (Texas) - USA',
            value: 'los_compas_de_hierro_usa',
            value2: true,
          }),
          new SelectItemThreeValuesImpl({
            label: 'California (California)',
            value: 'loscompasdehierrocalifornia',
            value1: 'loscompas664',
            value2: true,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Orange County (California)',
            value: 'compasde_hierro_orangecounty',
            value2: false,
          }), // no especifican sede
          new SelectItemThreeValuesImpl({
            label: 'Chicago (Illinois)',
            value: 'compas_de_hierro_chicago_',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Denver (Colorado)',
            value: 'los_compas_de_hierro_colorado',
            value1: 'profile.php?id=100095203422192',
            value2: true,
          }), // los_compas_de_hierro_denver //no entiendo cual es la sede oficial
          new SelectItemThreeValuesImpl({
            label: 'Houston (Texas)',
            value: 'los_compas_de_hierro.houston',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'New Jersey (New York)',
            value: 'los_compas_de_hierro_nj_ny',
            value2: true,
          }), // los_compas_de_hierro_nj
          new SelectItemThreeValuesImpl({
            label: 'Utah',
            value: 'los_compas_de_hierro_utah',
            value2: false,
          }), // no especifican su sede
        ],
      },
      {
        label: 'Venezuela',
        value: 've',
        items: [
          new SelectItemThreeValuesImpl({
            label: 'Venezuela',
            value: 'los.compas.de.hierro.vnzla',
            value2: false,
          }), // los_compas_de_hierro_venezuela
          new SelectItemThreeValuesImpl({
            label: 'Barquisimeto',
            value: 'compashierro_barquisimeto',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Caracas',
            value: 'compasdehierro.vnzla.caracas',
            value2: true,
          }), // los_compas_de_hierro_caracas
          new SelectItemThreeValuesImpl({
            label: 'Maracay',
            value: 'los_compas_de_hierro_maracay',
            value2: false,
          }),
          new SelectItemThreeValuesImpl({
            label: 'Puerto Cabello',
            value: 'compasdehierrovzla_pc',
            value2: false,
          }),
        ],
      },
    ];

    this._locations = [
      {
        cell_name: 'los_compas_de_hierro_usa',
        details: [
          {
            label: 'Calisthenics Station White Rock Lake',
            street: '1178 Emerald Isle Dr, Dallas, TX 75218',
            coords: { lat: 32.8321052, lng: -96.7122009 },
          },
        ],
      },
      {
        cell_name: 'loscompasdehierrojalisco',
        details: [
          {
            label: 'Parque San Jacinto',
            street: 'Av San Jacinto S/N, San Andrés, 44810 Guadalajara, Jal.',
            coords: { lat: 20.6631411, lng: -103.3002718 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_tunja',
        details: [
          {
            label: 'Estadio La Independencia',
            street: '32, Tunja, Boyacá, Colombia',
            coords: { lat: 5.5420772, lng: -73.355943 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_gdl',
        details: [
          {
            label: 'Bosque Los Colomos',
            street: 'C. El Chaco 3200, Providencia, 44630 Guadalajara, Jal.',
            coords: { lat: 20.7061182, lng: -103.4010889 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_honduras',
        details: [
          {
            label: 'Villa Olímpica',
            street: '3RRP+7M6, Tegucigalpa, Francisco Morazán, Honduras',
            coords: { lat: 14.0901437, lng: -87.1668718 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_hn_roatan',
        details: [
          {
            label: 'Estadio Julio Galindo',
            street: 'Roatán, Islas de la Bahía, Honduras',
            coords: { lat: 16.3154707, lng: -86.5549687 },
          },
        ],
      },
      {
        cell_name: 'compas_slp',
        details: [
          {
            label: 'Parque Tangamanga 1',
            street: 'Av. la Troje, Parque Tangamanga I, 78294 San Luis Potosí, S.L.P.',
            coords: { lat: 22.127485, lng: -101.0074534 },
          },
        ],
      },
      {
        cell_name: 'los_laguneros_de_hierro',
        details: [
          {
            label: 'Bosque Venustiano Carranza',
            street: 'Calle C. Juan Pablos col, centro Bosque, 27000 Torreón, Coah.',
            coords: { lat: 25.541072, lng: -103.4352835 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_puebla_',
        details: [
          {
            label: 'Parque Ecológico',
            street: 'Calle 24 Sur S/N, Azcarate, 72501 Heroica Puebla de Zaragoza, Pue.',
            coords: { lat: 19.0322957, lng: -98.1893368 },
          },
        ],
      },
      {
        cell_name: 'los_compas_del_cerro',
        details: [
          {
            label: 'Ciudad Deportiva Churubusco',
            street: 'Ing. Francisco Beltrán 4240, Sin Nombre de Col 21, 64560 Monterrey, N.L.',
            coords: { lat: 25.6884351, lng: -100.2729309 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_sv',
        details: [
          {
            label: 'Parque Cuscatlán',
            street:
              '25 Avenida Sur y, Alameda Franklin Delano Roosevelt, San Salvador, El Salvador',
            coords: { lat: 13.6987112, lng: -89.209239 },
          },
        ],
      },
      {
        cell_name: 'compasdehierromedellin',
        details: [
          {
            label: 'Estadio de Fútbol Atanasio Girardot',
            street:
              'Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia, Colombia',
            coords: { lat: 6.256767, lng: -75.5927478 },
          },
        ],
      },
      {
        cell_name: 'parceros_de_hierro_armenia',
        details: [
          {
            label: 'Polideportivo Universidad del Quindío',
            street: 'Cra. 15 #15 Norte-1 a 15 Norte-25, Armenia, Quindío, Colombia',
            coords: { lat: 4.5553959, lng: -75.660572 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_ecuador',
        details: [
          {
            label: 'Fundeporte',
            street: 'PC8W+H85, Quito 170146, Ecuador',
            coords: { lat: -0.2840863, lng: -78.5534297 },
          },
        ],
      },
      {
        cell_name: 'cdhcuenca',
        details: [
          {
            label: 'Parque de la Madre',
            street: '3XWW+5JX, Federico Malo, Cuenca 010107, Ecuador',
            coords: { lat: -2.904257, lng: -79.0047067 },
          },
        ],
      },
      {
        cell_name: 'compasdehierroguayaquil',
        details: [
          {
            label: 'Parque Vernaza',
            street: '1º Cj. 14A NE 5, Guayaquil 090513, Ecuador',
            coords: { lat: -2.1541396, lng: -79.8944546 },
          },
          {
            label: 'Parque Lineal',
            street: '70 900, Guayaquil 090615, Ecuador',
            coords: { lat: -2.1838947, lng: -79.9011006 },
          },
        ],
      },
      {
        cell_name: 'cdh.ibarra.ecuador',
        details: [
          {
            label: 'Redondel de "La Madre"',
            street: 'Av. Mariano Acosta 2018, Ibarra, Ecuador',
            coords: { lat: 0.347118, lng: -78.1349463 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_qvdo_ecu',
        details: [
          {
            label: 'Parque de la Familia',
            street: 'XG4C+F63, Quevedo, Ecuador',
            coords: { lat: -1.0440648, lng: -79.4813325 },
          },
        ],
      },
      {
        cell_name: 'lcdh.quitonorte',
        details: [
          {
            label: 'Parque La Carolina',
            street: 'Parque, Quito 170506, Ecuador',
            coords: { lat: -0.1828671, lng: -78.4860203 },
          },
        ],
      },
      {
        cell_name: 'cdh_quitosur',
        details: [
          {
            label: 'Fundeporte',
            street: 'PC8W+H85, Quito 170146, Ecuador',
            coords: { lat: -0.2840863, lng: -78.5534297 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_costarica',
        details: [
          {
            label: 'Parque Finsa, Sabana Sur',
            street: 'WVJR+4QJ, San José, Las Vegas, Costa Rica',
            coords: { lat: 9.9301885, lng: -84.108969 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_ags',
        details: [
          {
            label: 'Barras de ejercicios IDEA',
            street:
              'IV Centenario, Desarrollo Especial Parque IV Centenario, 20190 Aguascalientes, Ags.',
            coords: { lat: 21.8798353, lng: -102.2690897 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_toluca_',
        details: [
          {
            label: 'Parque Metropolitano Bicentenario',
            street: 'Av. Paseo Tollocan s/n, Universidad, 50130 Toluca de Lerdo, Méx.',
            coords: { lat: 19.2703619, lng: -99.6555035 },
          },
        ],
      },
      {
        cell_name: 'compasdehierro.vnzla.caracas',
        details: [
          {
            label: 'DISTRITO VILLAGE',
            street: 'Av. Luis Roche, con Transversal 5, Miranda, Venezuela',
            coords: { lat: 10.5025213, lng: -66.8487238 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_cancun',
        details: [
          {
            label: 'Parque Kilometro 0',
            street: 'Blvd. Kukulcan, Puerto Juarez, Zona Hotelera, 77500 Cancún, Q.R.',
            coords: { lat: 21.156692, lng: -86.8233397 },
          },
        ],
      },
      {
        cell_name: 'parcerosdehierro_rionegro',
        details: [
          {
            label: 'Parque Principal Rionegro Antioquia',
            street: 'a 49-59, Cra 50 #49-1, Rionegro, Antioquia, Colombia',
            coords: { lat: 6.1535504, lng: -75.3765129 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_guatemala_ofi',
        details: [
          {
            label: 'Campo Marte',
            street: '36 Avenida 27y, Cdad. de Guatemala 01010, Guatemala',
            coords: { lat: 14.6157046, lng: -90.509519 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_es',
        details: [
          {
            label: 'Gimnasio exterior',
            street: 'Pg. Marítim de la Barceloneta, 17, 08003 Barcelona, España',
            coords: { lat: 41.3814265, lng: 2.1922586 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_bcn',
        details: [
          {
            label: 'Calistenia Parque de les Planes',
            street: "08905 L'Hospitalet de Llobregat, Barcelona, España",
            coords: { lat: 41.3657706, lng: 2.085946 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_nj_ny',
        details: [
          {
            label: 'Lincoln Park',
            street: '1 County Rd 605, Jersey City, NJ 07304, Estados Unidos',
            coords: { lat: 40.7774356, lng: -74.0456996 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_colorado',
        details: [
          {
            label: '5336 DTC Blvd',
            street: '5336 DTC Blvd, Greenwood Village, CO 80111, EE. UU.',
            coords: { lat: 39.6171996, lng: -104.89099 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierroquetzaltenango',
        details: [
          {
            label: 'Complejo Deportivo',
            street: '4a Calle 26-27, Quezaltenango, Guatemala',
            coords: { lat: 14.8463823, lng: -91.5309402 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_madrid',
        details: [
          {
            label: 'Parque de El Retiro',
            street: 'Parque del Retiro, 28009 Madrid, España',
            coords: { lat: 40.4150972, lng: -3.6851188 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_amazonics',
        details: [
          {
            label: 'Parque Piñata',
            street: 'Av 9 de Febrero, Cobija, Bolivia',
            coords: { lat: -11.0301392, lng: -68.7650612 },
          },
        ],
      },
      {
        cell_name: 'compas.de.hierro.cochabamba1',
        details: [
          {
            label: 'Parque La Torre',
            street: 'JV53+FVF, Av. Heroínas, Cochabamba, Bolivia',
            coords: { lat: -17.3910618, lng: -66.1454071 },
          },
        ],
      },
      {
        cell_name: 'compas.de.hierro.lapaz',
        details: [
          {
            label: 'Plaza España',
            street: 'FVPC+7J2, Victor Sanjinez, La Paz, Bolivia',
            coords: { lat: -16.514216, lng: -68.1273186 },
          },
        ],
      },
      {
        cell_name: 'los.compas.de.hierro_irlanda',
        details: [
          {
            label: 'Parque Fénix',
            street: 'Phoenix Park, Dublin, Irlanda',
            coords: { lat: 53.3431735, lng: -6.3254826 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_lisboa',
        details: [
          {
            label: 'Calisthenics Park',
            street: 'R. Chen He, 1990-513 Lisboa, Portugal',
            coords: { lat: 38.7879463, lng: -9.095305 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro',
        details: [
          {
            label: 'Barras Naucalli',
            street: 'FQV4+6R, Manzana 020, 53150 Naucalpan de Juárez, Méx.',
            coords: { lat: 19.4908762, lng: -99.2441552 },
          },
          {
            label: 'Barras Insurgentes "Los Compas de Hierro"',
            street: 'Av Chapultepec 276, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX',
            coords: { lat: 19.456492, lng: -99.1636326 },
          },
          {
            label: 'Barras Chapultepec',
            street: 'Bosque de Chapultepec II Secc, Miguel Hidalgo, 11100 Ciudad de México, CDMX',
            coords: { lat: 19.4145354, lng: -99.2031567 },
          },
          {
            label: 'Barras del Bosque de San Juan de Aragón',
            street: 'de San Juan de Aragón, Gustavo A Madero, 07920 Ciudad de México, CDMX',
            coords: { lat: 19.4591167, lng: -99.0780185 },
          },
        ],
      },
      {
        cell_name: 'compas.de.hierro.chile.oficial',
        details: [
          {
            label: 'Barras. Gral. Bustamante',
            street:
              'Grindoor Growshop Tienda online - Av. Gral. Bustamante, Providencia, Región Metropolitana, Chile',
            coords: { lat: -33.4426487, lng: -70.6346539 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_queretaro',
        details: [
          {
            label: 'Parque Alcanfores Norte',
            street:
              'Gustavo Adolfo Bécquer, Parque los Alcanfores Secc Nte, 76156 Santiago de Querétaro, Qro.',
            coords: { lat: 20.6022462, lng: -100.4046944 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_chihuahua',
        details: [
          {
            label: 'Ciudad Deportiva',
            street: 'Calle Pascual Orozco 2750, Magisterial Universidad, 31200 Chihuahua, Chih.',
            coords: { lat: 28.6600849, lng: -106.0867026 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_leonn',
        details: [
          {
            label: 'Parque calistenia',
            street: '58Q6+5Q Parque Metropolitano de León, 37138 El Molino Residencial, Gto.',
            coords: { lat: 21.1878706, lng: -101.6878448 },
          },
          {
            label: 'Parque bosques',
            street: 'C. Historiadores 961, El Granjeno Sur, 37550 León de los Aldama, Gto.',
            coords: { lat: 21.0849201, lng: -101.6607031 },
          },
        ],
      },
      {
        cell_name: 'los_compasdehierro_peru',
        details: [
          {
            label: 'Campo de Marte',
            street: 'Jesús María 15072, Lima, Perú',
            coords: { lat: -12.0683312, lng: -77.0439599 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_salta',
        details: [
          {
            label: 'Av. Reyes Catolicos y Los Algarrobos - Segunda Rotonda de Tres Cerritos',
            street: '6JQ2+2F Salta, Argentina',
            coords: { lat: -24.7624565, lng: -65.4014463 },
          },
        ],
      },
      {
        cell_name: 'Los_compas_de_hierro_tijuana',
        details: [
          {
            label: 'Parque Morelos',
            street: 'Av de los Insurgentes 16000, Guadalajara, 22105 Tijuana, B.C.',
            coords: { lat: 32.4987248, lng: -116.9376456 },
          },
        ],
      },
      {
        cell_name: 'barras_tribugdl_oficial',
        details: [
          {
            label: 'Parque San Rafael',
            street: 'Ciencias 2844, San Rafael, 44810 Guadalajara, Jal.',
            coords: { lat: 20.6526963, lng: -103.300436 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_morelia',
        details: [
          {
            label: 'Bosque Lázaro Cárdenas',
            street: 'Perif. Paseo de la República s/n, Bosque Camelinas, 58290 Morelia, Mich.',
            coords: { lat: 19.6813578, lng: -101.1800012 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_yucatan',
        details: [
          {
            label: 'Parque Recreativo de Oriente',
            street: 'C. 55 671, Fraccionamiento del Parque, 97160 Mérida, Yuc.',
            coords: { lat: 20.9693862, lng: -89.5886678 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro.houston',
        details: [
          {
            label: 'The Water Works in Buffalo Bayou Park',
            street: '105 Sabine St, Houston, TX 77007, Estados Unidos',
            coords: { lat: 29.7622118, lng: -95.3810105 },
          },
        ],
      },
      {
        cell_name: 'loscompasdehierro_oaxaca',
        details: [
          {
            label: 'Parque El Tequio',
            street: '277H+V5 Santa Cruz Xoxocotlán, Oaxaca',
            coords: { lat: 17.006485, lng: -96.7196561 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_chicago_',
        details: [
          {
            label: '2501 Highland Park Dr',
            street: '2501 Highland Park Dr, Joliet, IL 60432, Estados Unidos',
            coords: { lat: 41.5327832, lng: -88.0234737 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_maracay',
        details: [
          {
            label: 'Parque Base Aragua',
            street: '7C36+RPJ, Maracay 2101, Aragua, Venezuela',
            coords: { lat: 10.2530953, lng: -67.5918763 },
          },
        ],
      },
      {
        cell_name: 'compasdehierrovzla_pc',
        details: [
          {
            label: 'Boulevard de la Urbanización La Belisa',
            street: 'FXF5+5WX, Puerto Cabello 2050, Carabobo, Venezuela',
            coords: { lat: 10.472507, lng: -68.0408954 },
          },
        ],
      },
      {
        cell_name: 'compas_de_hierro_cordoba',
        details: [
          {
            label: 'Parques de Calistenia en parque Sarmiento',
            street: 'HR9F+5Q Córdoba, Argentina',
            coords: { lat: -31.4326465, lng: -64.176064 },
          },
        ],
      },
      {
        cell_name: 'los_compas_del_hierro_arg',
        details: [
          {
            label: 'GEBA Sede Jorge Newbery',
            street: 'Av. Coronel Marcelino E. Freyre 3860, Buenos Aires, Argentina',
            coords: { lat: -34.5692086, lng: -58.4218331 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_mdq',
        details: [
          {
            label: 'Monumento Expedición Atlantis',
            street:
              'B7600JWQ, Av. Patricio Peralta Ramos 4200-4298, B7600JWQ Mar del Plata, Provincia de Buenos Aires, Argentina',
            coords: { lat: -38.0168589, lng: -57.5278966 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_tlaxcala',
        details: [
          {
            label: 'Gimnasio al aire libre',
            street: 'CRFW+8H Cdad. de Apizaco, Tlaxcala',
            coords: { lat: 19.4230027, lng: -98.1543953 },
          },
        ],
      },
      {
        cell_name: 'compas_dehielo_toronto',
        details: [
          {
            label: 'Riverdale East Bodyweight Exercise Equipment',
            street: 'MJ9V+5V Toronto, Ontario, Canadá',
            coords: { lat: 43.6679304, lng: -79.3578886 },
          },
        ],
      },
      {
        cell_name: 'loscompasdehierrocali',
        details: [
          {
            label: 'Canchas Panamericanas',
            street: 'Cl. 9 #37 - 00, Eucaristico, Cali, Valle del Cauca, Colombia',
            coords: { lat: 3.4256591, lng: -76.5366609 },
          },
        ],
      },
      {
        cell_name: 'estoicos_de_hierro_bogota',
        details: [
          {
            label: 'Parque Urbanización Salitre',
            street: 'Cl. 43 #66b-2, Bogotá, Colombia',
            coords: { lat: 4.6500293, lng: -74.1813909 },
          },
        ],
      },
      {
        cell_name: 'parceros_de_hierro_ocana',
        details: [
          {
            label: 'Puente del hospital EQC',
            street: '70, Ocaña, Norte de Santander, Colombia',
            coords: { lat: 8.2542292, lng: -73.3592781 },
          },
        ],
      },
      {
        cell_name: 'parceros_de_hierro_manizales',
        details: [
          {
            label: 'Cra. 29 #31a-155',
            street: 'Cra. 29 #31a-155',
            coords: { lat: 5.064667, lng: -75.51298 },
          },
        ],
      },
      {
        cell_name: 'los_compas_del_desierto',
        details: [
          {
            label: 'Unidad Deportiva "La Milla"',
            street:
              'Rodolfo Campodónico, Adolfo López Mateos 262, Centro, 83556 Puerto Peñasco, Son.',
            coords: { lat: 31.3267621, lng: -113.5290798 },
          },
        ],
      },
      {
        cell_name: 'lcdh_hidalgo_oficial',
        details: [
          {
            label: 'Unidad Deportiva Municipal',
            street: '36C9+3R Pachuca de Soto, Hidalgo',
            coords: { lat: 20.0700171, lng: -98.7804265 },
          },
        ],
      },
      {
        cell_name: 'los_compas_de_hierro_zacatecas',
        details: [
          {
            label: 'Parque Arroyo de la Plata',
            street: 'Lomas del Campestre, 98098 Zacatecas, Zac.',
            coords: { lat: 22.7626989, lng: -102.5550033 },
          },
        ],
      },
    ];
  }

  private _groupedCities!: SelectItemGroupThreeValues[];

  get groupedCities(): SelectItemGroupThreeValues[] {
    return this._groupedCities;
  }

  set groupedCities(value: SelectItemGroupThreeValues[]) {
    this._groupedCities = value;
  }

  private _locations!: CellLocation[];

  get locations(): CellLocation[] {
    return this._locations;
  }

  set locations(value: CellLocation[]) {
    this._locations = value;
  }
}
