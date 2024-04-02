import { User, UserForRegistration } from "./type";

export const registrationFetch = async (obj: UserForRegistration) : Promise<User> => {
  const res = await fetch('api/auth/sign-up', {
    method: 'post',
    headers: {
      'Content-type' : 'application/json'
    }, 
    body: JSON.stringify(obj)
  })
  if(res.ok) {
    const data = await res.json()
    return data.user
  }
  const {message} = await res.json()
  throw message
}