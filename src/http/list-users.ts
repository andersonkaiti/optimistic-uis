import type { IUser } from '@/types/user'

export async function listUsers(): Promise<IUser[]> {
  const response = await fetch('http://localhost:3001/users')

  return await response.json()
}
