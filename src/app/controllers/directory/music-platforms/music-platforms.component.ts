import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-music-platforms',
  imports: [CardModule, NgClass, NgFor],
  templateUrl: './music-platforms.component.html',
  styleUrl: './music-platforms.component.scss',
})
export class MusicPlatformsComponent {
  musicPlatforms = [
    {
      name: 'Spotify',
      icon: 'pi pi-spotify',
      artists: [
        { name: 'Temach', url: 'https://open.spotify.com/intl-es/artist/3Vk13C8zxcHqAqcTZhluj9' },
        {
          name: 'White Shit State',
          url: 'https://open.spotify.com/intl-es/artist/7xxj65R3e17WXuZTU67HxR',
        },
        {
          name: 'Ruga Kisin',
          url: 'https://open.spotify.com/intl-es/artist/2h9ZwNdMZcqHKqJisyf1LT',
        },
        {
          name: 'Elburguer',
          url: 'https://open.spotify.com/intl-es/artist/55sUDNma3qznDILZgydRHT',
        },
        { name: 'MC Monel', url: 'https://open.spotify.com/intl-es/artist/6DxT9fbm7M0sDGWrPoAzfw' },
        { name: 'Gacoh', url: 'https://open.spotify.com/intl-es/artist/6zLfG2qJyi6YbHwsadOXHx' },
        {
          name: 'Muro de Cráneos',
          url: 'https://open.spotify.com/intl-es/artist/02DvUfztcmjLdCFRysedNb',
        },
        { name: 'Mau Gree', url: 'https://open.spotify.com/intl-es/artist/7g8zxRXsQUdvHRanDbcH18' },
        { name: 'Frodiboy', url: 'https://open.spotify.com/intl-es/artist/0yqmgxiFONOUT7zc4wwP1y' },
        { name: 'MC FD', url: 'https://open.spotify.com/intl-es/artist/5onAhDbB92khYFxqCzZFSF' },
      ],
    },
    {
      name: 'Amazon Music',
      icon: 'pi pi-amazon',
      artists: [
        { name: 'Temach', url: 'https://music.amazon.com.mx/artists/B09DQ618F3/el-temach' },
        {
          name: 'White Shit State',
          url: 'https://music.amazon.com.mx/artists/B07W3WGK7R/white-shit-state',
        },
        { name: 'Ruga Kisin', url: 'https://music.amazon.com.mx/artists/B09XKW23RY/ruga-kisin' },
      ],
    },
    {
      name: 'YouTube',
      icon: 'pi pi-youtube',
      artists: [
        { name: 'Temach', url: 'https://music.youtube.com/channel/UCahshm4tJT0c9rJzb7eCKWA' },
        {
          name: 'White Shit State',
          url: 'https://music.youtube.com/channel/UCENkMpmeDiY-dnXDnopeimA',
        },
        { name: 'Ruga Kisin', url: 'https://music.youtube.com/channel/UCEzlsxrAMoRsvkNGPBO0CBg' },
      ],
    },
    // Puedes agregar más plataformas y artistas según sea necesario
  ];
}
