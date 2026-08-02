import { toast } from '@components/ui/toast'
import { createUser } from '@http/create-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { USERS_QUERY_KEY } from './use-users'

export const CREATE_USER_MUTATION_KEY = ['create-user']

export function useCreateUser() {
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: CREATE_USER_MUTATION_KEY,
    mutationFn: createUser,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY,
      })
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
