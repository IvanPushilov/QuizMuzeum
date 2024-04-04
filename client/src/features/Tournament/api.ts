import type { Tournament } from "./type";

export const tournamentsLoadFetch = async (): Promise<Tournament[]> => {
  const res = await fetch('/api/tournaments')
  const data = await res.json()
  return data.tournaments
}