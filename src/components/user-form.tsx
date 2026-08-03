import { useCreateUser } from '@hooks/use-create-user'
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function UserForm() {
  const { createUserAction, isLoading } = useCreateUser()

  return (
    <form action={createUserAction} className="rounded-md bg-card/50 p-4">
      <div className="flex gap-3">
        <Input placeholder="Nome do usuário" name="name" />
        <Input placeholder="@ no GitHub" name="username" />
      </div>

      <Button type="submit" className="mt-3 w-full">
        {isLoading && <Loader2 />}
        {isLoading ? 'Cadastrando' : 'Cadastrar'}
      </Button>
    </form>
  )
}
