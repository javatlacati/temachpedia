import { Injectable } from '@angular/core';
import { type SelectItemGroupThreeValues } from '../model/SelectItemGroupThreeValues';
import { type CellLocation } from '../model/CellLocation';
import { SelectItemThreeValuesImpl } from '../model/SelectItemThreeValues';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SedeslcdhService {
  private readonly _groupedCities: Observable<SelectItemGroupThreeValues[]>;
  private readonly _locations: Observable<CellLocation[]>;

  constructor(private readonly httpClient: HttpClient) {
    this._groupedCities = this.httpClient
      .get<SelectItemGroupThreeValues[]>(`${environment.dataApi}/grouped_cities`)
      .pipe(
        map((groups) =>
          groups.map((group) => ({
            ...group,
            items: group.items.map(
              (item) =>
                new SelectItemThreeValuesImpl({
                  label: item.label,
                  value: item.value,
                  value1: item.value1, // Even though it's null in the example, it's included for completeness
                  value2: item.value2,
                }),
            ),
          })),
        ),
      );

    this._locations = this.httpClient.get<CellLocation[]>(`${environment.dataApi}/cell_locations`);
  }

  public getGroupedCities(): Observable<SelectItemGroupThreeValues[]> {
    return this._groupedCities;
  }

  public getLocations(): Observable<CellLocation[]> {
    return this._locations;
  }
}
