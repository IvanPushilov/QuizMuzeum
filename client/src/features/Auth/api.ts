import type { User, UserForAuthorisation, UserForRegistration } from './type';

export const registrationFetch = async (obj: UserForRegistration): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    const data = await res.json();
    return data.user;
  }
  const { message } = await res.json();
  throw message;
};

export const logoutFetch = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = (await res.json()) as { message: string };
  return data;
};

export const checkUserFetch = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  if (res.ok) {
    const data = await res.json();
    return data.user;
  }
  const { message } = await res.json();
  throw message;
};

export const authorisationFetch = async (obj: UserForAuthorisation): Promise<User> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    const data = await res.json();

    return data.user;
  }
  const { message } = await res.json();
  throw message;
};

export const profileUpdateFetch = async (obj: FormData): Promise<User> => {
  const res = await fetch('/api/profile/update', {
    method: 'PUT',
    body: obj,
  });
  const data = await res.json();
  return data.user;
};

export const userUpdateScoreFetch = async (id: number): Promise<User> => {
  const res = await fetch(`/api/answers/user/${id}`);
  const data = await res.json();
  return data.user;
};
