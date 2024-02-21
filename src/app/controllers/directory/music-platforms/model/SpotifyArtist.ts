export interface DiskCover {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  image: DiskCover[];
  external_urls: { spotify: string };
}
