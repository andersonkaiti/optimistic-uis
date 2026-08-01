import { toast } from '@components/ui/toast'
import { createUser } from '@http/create-user'
import { useMutation } from '@tanstack/react-query'

export function useCreateUser() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createUser,
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

      toast.add({
        title: 'Usuário cadastrado com sucesso!',
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
