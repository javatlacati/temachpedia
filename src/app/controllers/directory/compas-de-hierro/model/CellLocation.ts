import { type LatLngExpression } from 'leaflet';

export interface CellDetails {
  street: string;
  label: string;
  lat_lng_expression: LatLngExpression; // { lng: number; lat: number }
}

export interface CellLocation {
  cell_name: string;
  cell_details: CellDetails[];
}
