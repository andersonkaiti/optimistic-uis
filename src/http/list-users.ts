interface IUsers {
  id: string
  name: string
  username: string
  blocked: boolean
}

export async function listUsers(): Promise<IUsers[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const response = await fetch('http://localhost:3001/users')

  return await response.json()
}
