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
  await new Promise((resolve) => setTimeout(resolve, 1500))

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
