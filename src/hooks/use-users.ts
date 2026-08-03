import { listUsers } from '@http/list-users'
import { useQuery } from '@tanstack/react-query'
import type { IUser } from '@/types/user'
import type { WithStatus } from '@/types/with-status'

export const USERS_QUERY_KEY = ['users']

export type UsersQueryData = WithStatus<IUser>[]

export function useUsers() {
  const { data = [], isLoading } = useQuery<UsersQueryData>({
    queryKey: USERS_QUERY_KEY,
    queryFn: async () => {
      const users = await listUsers()

      return users
    },
  })

  return {
    users: data,
    isLoading,
  }
}
