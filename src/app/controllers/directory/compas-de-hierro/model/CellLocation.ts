interface CellDetails {
  street: string;
  label: string;
  coords: { lng: number; lat: number }
}

export interface CellLocation {
  cell_name: string;
  details: CellDetails[]
}
