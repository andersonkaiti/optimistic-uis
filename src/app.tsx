import { Header } from '@components/header'
import { UserForm } from '@components/user-form'
import { UsersList } from '@components/users-list'

export function App() {
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col gap-4 p-4 pt-20">
      <Header />

      <main className="mt-10 space-y-3">
        <UserForm />

        <UsersList />
      </main>
    </div>
  )
}
