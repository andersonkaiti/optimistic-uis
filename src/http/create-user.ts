import type { IUser } from '@/types/user'

interface ICreateUserRequest extends Omit<IUser, 'id'> {}

export async function createUser({
  name,
  username,
  blocked,
}: ICreateUserRequest): Promise<IUser> {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      blocked,
    }),
  })

  return await response.json()
}
