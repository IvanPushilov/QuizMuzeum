export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  rpassword: string;
  score: number;
  role: string;
  img: string;
}

export type UserForRegistration = Omit<User, 'id' | 'score' | 'role' | 'img'>
export type UserForAuthorisation = Pick<User, 'email' | 'password'>

export type StateAuth = {
  user: User | null ;
  message: string | undefined
}