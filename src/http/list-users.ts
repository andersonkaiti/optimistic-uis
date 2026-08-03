interface IUser {
  id: string
  name: string
  username: string
  blocked: boolean
}

export async function listUsers(): Promise<IUser[]> {
  const response = await fetch('http://localhost:3001/users')

  return await response.json()
}
