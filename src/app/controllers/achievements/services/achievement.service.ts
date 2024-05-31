import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Achievement } from '../model/Achievement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private readonly _heads: Observable<Achievement[]>;

  constructor(private readonly client: HttpClient) {
    this._heads = client.get<Achievement[]>('http://localhost/api/achievements');
  }

  get heads(): Observable<Achievement[]> {
    return this._heads;
  }
}
