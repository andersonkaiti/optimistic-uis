import { useCreateUser } from '@hooks/use-create-user'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function UserForm() {
  const { createUserAction, isLoading } = useCreateUser()

  return (
    <form action={createUserAction} className="rounded-md bg-card/50 p-4">
      <div className="flex gap-3">
        <Input placeholder="Nome do usuário" name="name" disabled={isLoading} />
        <Input placeholder="@ no GitHub" name="username" disabled={isLoading} />
      </div>

      <Button type="submit" className="mt-3 w-full" disabled={isLoading}>
        {isLoading ? 'Cadastrando' : 'Cadastrar'}
      </Button>
    </form>
  )
}
