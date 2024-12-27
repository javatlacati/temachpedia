import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Achievement } from '../model/Achievement';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private readonly _heads: Observable<Achievement[]>;

  constructor(private readonly client: HttpClient) {
    this._heads = client.get<Achievement[]>(`${environment.dataApi}/achievements`);
  }

  get heads(): Observable<Achievement[]> {
    return this._heads;
  }
}
