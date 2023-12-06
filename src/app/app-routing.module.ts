import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "./controllers/search/search.component";
import {HomeComponent} from "./controllers/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lyrics', loadChildren: () => import('./controllers/lyrics/lyrics.module').then(m => m.LyricsModule)},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
