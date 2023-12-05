import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "./controllers/search/search.component";
import {HomeComponent} from "./controllers/home/home.component";
import {SongListComponent} from "./controllers/lyrics/song-list/song-list.component";
import {SongComponent} from "./controllers/lyrics/song/song.component";
import {DirectoryComponent} from "./controllers/directory/directory.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lyrics', component: SongListComponent},
  {path: 'song/:title', component: SongComponent},
  {path: 'directory', component: DirectoryComponent},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
