import { toast } from '@components/ui/toast'
import { createUser } from '@http/create-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IUser } from '@/types/user'
import { USERS_QUERY_KEY } from './use-users'

export function useCreateUser() {
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createUser,
    onMutate: (variables) => {
      const tempUserId = String(Math.random())

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, (old) =>
        old?.concat({
          ...variables,
          id: tempUserId,
        }),
      )

      return { tempUserId }
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY })

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, (old) =>
        old?.map((user) => (user.id === context.tempUserId ? data : user)),
      )
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY })

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, (old) =>
        old?.filter((user) => user.id !== context?.tempUserId),
      )
    },
  })

  async function createUserAction(formData: FormData) {
    const name = String(formData.get('name'))
    const username = String(formData.get('username'))

    try {
      await mutateAsync({
        name,
        username,
        blocked: false,
      })
    } catch {
      toast.add({
        title: 'Erro ao cadastrar usuário!',
        type: 'error',
      })
    }
  }

  return {
    isLoading: isPending,
    createUserAction,
  }
}
