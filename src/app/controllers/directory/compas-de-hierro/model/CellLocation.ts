import { type LatLngExpression } from 'leaflet';

export interface CellDetails {
  street: string;
  label: string;
  coords: LatLngExpression; // { lng: number; lat: number }
}

export interface CellLocation {
  cell_name: string;
  details: CellDetails[];
}
