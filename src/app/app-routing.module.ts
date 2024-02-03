import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { HomeComponent } from './controllers/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: async () =>
      await import('./controllers/search/search.module').then((m) => m.SearchModule),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'lyrics',
    loadChildren: async () =>
      await import('./controllers/lyrics/lyrics.module').then((m) => m.LyricsModule),
  },
  {
    path: 'faq',
    loadChildren: async () => await import('./controllers/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'directory',
    loadChildren: async () =>
      await import('./controllers/directory/directory.module').then((m) => m.DirectoryModule),
  },
  {
    path: 'achievements',
    loadChildren: async () =>
      await import('./controllers/achievements/achievements.module').then(
        (m) => m.AchievementsModule,
      ),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
