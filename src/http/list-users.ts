interface IUsers {
  id: string
  name: string
  username: string
  blocked: boolean
}

export async function listUsers(): Promise<IUsers[]> {
  const response = await fetch('http://localhost:3001/users')

  return await response.json()
}
