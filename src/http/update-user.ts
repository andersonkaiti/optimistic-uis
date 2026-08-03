import type { IUser } from '@/types/user'

interface IUpdateUserRequest extends Partial<Omit<IUser, 'id'>> {
  id: string
}

export async function updateUser({
  id,
  blocked,
}: IUpdateUserRequest): Promise<void> {
  const url = new URL('http://localhost:3001')
  url.pathname = `users/${id}`

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ blocked }),
  })

  return await response.json()
}
