import { useUsers } from '@hooks/use-users'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Switch } from '../ui/switch'
import { UsersListSkeleton } from './skeleton'

export function UsersList() {
  const { users, isLoading } = useUsers()

  return (
    <div className="space-y-4">
      {isLoading && <UsersListSkeleton />}

      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={`https://github.com/${user.username}.png`} />
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <strong className="block text-lg leading-4">{user.name}</strong>
              <small className="text-muted-foreground">@{user.username}</small>
            </div>
          </div>

          <Switch />
        </div>
      ))}
    </div>
  )
}
