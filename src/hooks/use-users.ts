import { listUsers } from '@http/list-users'
import { useQuery } from '@tanstack/react-query'

export const USERS_QUERY_KEY = ['users']

export function useUsers() {
  const { data = [], isLoading } = useQuery({
    queryKey: USERS_QUERY_KEY,
    queryFn: listUsers,
  })

  return {
    users: data,
    isLoading,
  }
}
