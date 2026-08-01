import { Button } from './ui/button'
import { Input } from './ui/input'

export function UserForm() {
  return (
    <form action="" className="rounded-md bg-card/50 p-4">
      <div className="flex gap-3">
        <Input placeholder="Nome do usuário" />
        <Input placeholder="@ no GitHub" />
      </div>

      <Button className="mt-3 w-full">Cadastrar</Button>
    </form>
  )
}
