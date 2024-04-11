import { Album } from "./type";

export const albumLoadFetch = async (): Promise<Album[]> => {
  const res = await fetch('/api/album')
  const data = await res.json()
  return data.album
}