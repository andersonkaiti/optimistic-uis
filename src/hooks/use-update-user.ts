import { toast } from '@components/ui/toast'
import { updateUser } from '@http/update-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { USERS_QUERY_KEY } from './use-users'

export function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY,
      })
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
