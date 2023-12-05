import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./controllers/home/home.component";
import {DirectoryComponent} from "./controllers/directory/directory.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', loadChildren: () => import('./controllers/search/search.module').then(m => m.SearchModule)},
  {path: 'home', component: HomeComponent},
  {path: 'lyrics', loadChildren: () => import('./controllers/lyrics/lyrics.module').then(m => m.LyricsModule)},
  {path: 'directory', component: DirectoryComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
