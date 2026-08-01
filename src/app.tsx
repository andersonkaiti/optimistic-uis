import { Header } from '@components/header'
import { UsersList } from '@components/users-list'

export function App() {
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col gap-4 pt-20">
      <Header />

      <main className="mt-10">
        <UsersList />
      </main>
    </div>
  )
}
