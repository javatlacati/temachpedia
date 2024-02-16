import { Component } from '@angular/core';
import { type MenuItem } from 'primeng/api';
import * as Leaflet from 'leaflet';
import { type ContextMenu } from 'primeng/contextmenu';
import { type SelectItemGroupTwoValues } from './model/SelectItemGroupTwoValues';
import { type City } from './model/city';
import { type CellDetails, type CellLocation } from './model/CellLocation';
import { SedeslcdhService } from './services/sedeslcdh.service';
import { type LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-compas-de-hierro',
  templateUrl: './compas-de-hierro.component.html',
  styleUrls: ['./compas-de-hierro.component.scss'],
})
export class CompasDeHierroComponent {
  selectedCity!: City;
  groupedCities!: SelectItemGroupTwoValues[];
  private readonly locations!: CellLocation[];
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  redes: MenuItem[] = [
    {
      label: 'ig',
      command: () => {
        this.abreIgCompas();
      },
    },
    {
      label: 'fb',
      command: () => {
        this.abreFbCompas();
      },
    },
  ];

  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 16,
    center: { lat: 19.456492, lng: -99.1636326 }, // en caso de no permitir compartir la ubicación el mapa se iniciará en estas coordenadas
  };

  constructor(private readonly sedesService: SedeslcdhService) {
    this.locations = sedesService.locations;
    this.groupedCities = sedesService.groupedCities;
  }

  initMarkers() {
    for (let index = 0; index < this.locations.length; index++) {
      const data = this.locations[index];
      for (let j = 0; j < data.details.length; j++) {
        const cellDetail = data.details[j];
        const marker = this.generateMarker(cellDetail.coords, index);
        const content = this.generateMarkerContent(data, cellDetail);
        marker.addTo(this.map).bindPopup(content);
        this.markers.push(marker);
      }
    }

    this.map.locate({ setView: true, maxZoom: 16 });
  }

  private generateMarkerContent(data: CellLocation, cellDetail: CellDetails) {
    let fb;
    for (const group of this.groupedCities) {
      for (const item of group.items) {
        if (item.value === data.cell_name) {
          fb = item.value1;
          break;
        }
      }
    }
    let content = `<b>${cellDetail.label}</b><br><br>${cellDetail.street}<br><br><a href="https://www.instagram.com/${data.cell_name}" target="_blank"><span class="pi pi-instagram"></span></a>`;
    if (fb) {
      content += `&nbsp;<a href="https://www.facebook.com/${fb}" target="_blank"><span class="pi pi-facebook"></span></a>`;
    }
    return content;
  }

  generateMarker(data: LatLngExpression, index?: number) {
    return Leaflet.marker(data, { draggable: true });
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
      shadowUrl: 'assets/marker-shadow.png',
    });

    this.map = $event;
    this.initMarkers();
  }

  showMenu(menu: ContextMenu, $event: MouseEvent) {
    $event.preventDefault();
    if (this.selectedCity) {
      console.log(this.selectedCity);
      setTimeout(() => {
        // this.items[1].label = 'Edit ' + item.label;
        menu.toggle($event);
      }, 1);
    }
  }

  /**
   * Shows the location of the selected city.
   * The instagram account of the LCDH cell is considered as the cell name.
   * The first location associated with the LCDH cell is considered as the main and therefore shown.
   */
  muestraUbicacion() {
    const latlng = this.locations.find(
      (cellLocation) => cellLocation.cell_name === this.selectedCity.value,
    )?.details[0].coords;
    if (latlng) {
      this.map.panTo(latlng);
    } else {
      console.warn('La célula de los compas de hierro no tiene sede aún');
    }
  }

  abreIgCompas() {
    console.log(this.selectedCity);
    const url = `https://www.instagram.com/${this.selectedCity.value}`;
    window.open(url, '_blank');
  }

  private abreFbCompas() {
    if (this.selectedCity.value1) {
      const url = `https://www.facebook.com/${this.selectedCity.value1}`;
      window.open(url, '_blank');
    }
  }
}
