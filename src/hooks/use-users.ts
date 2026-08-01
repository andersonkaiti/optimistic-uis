import { listUsers } from '@http/list-users'
import { useQuery } from '@tanstack/react-query'

export function useUsers() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: listUsers,
  })

  return {
    users: data,
    isLoading,
  }
}
