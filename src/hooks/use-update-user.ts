import { toast } from '@components/ui/toast'
import { updateUser } from '@http/update-user'
import { useMutation } from '@tanstack/react-query'

export function useUpdateUser() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
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
