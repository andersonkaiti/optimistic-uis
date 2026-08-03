import { toast } from '@components/ui/toast'
import { updateUser } from '@http/update-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IUser } from '@/types/user'
import { USERS_QUERY_KEY } from './use-users'

export function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onMutate: async (variables) => {
      const previousUsers = queryClient.getQueryData<IUser[]>(USERS_QUERY_KEY)

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, (old) =>
        old?.map((user) =>
          user.id === variables.id
            ? {
                ...user,
                ...variables,
              }
            : user,
        ),
      )

      return { previousUsers }
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY })

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, context?.previousUsers)
    },
  })

  async function handleBlockedChange(id: string, blocked: boolean) {
    try {
      await mutateAsync({
        id,
        blocked,
      })

      toast.add({
        title: 'Usuário atualizado com sucesso!',
      })
    } catch {
      toast.add({
        title: 'Erro ao atualizar usuário!',
        type: 'error',
      })
    }
  }

  return {
    isLoading: isPending,
    handleBlockedChange,
  }
}
