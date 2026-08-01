interface ICreateUserRequest {
  name: string
  username: string
  blocked: boolean
}

export async function createUser({
  name,
  username,
  blocked,
}: ICreateUserRequest): Promise<void> {
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
