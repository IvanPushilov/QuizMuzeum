export type Album = {
  id: number;
  img: string;
}

export type AlbumState = {
  img: Album[];
  message: string | undefined;
}