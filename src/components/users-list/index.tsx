import { useUpdateUser } from '@hooks/use-update-user'
import { useUsers } from '@hooks/use-users'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Switch } from '../ui/switch'
import { UsersListSkeleton } from './skeleton'

export function UsersList() {
  const { users, isLoading } = useUsers()

  const { handleBlockedChange } = useUpdateUser()

  return (
    <div className="space-y-4">
      {isLoading && <UsersListSkeleton />}

      {users.map(({ id, name, username, blocked }) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={`https://github.com/${username}.png`} />
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div>
              <strong className="block text-lg leading-4">{name}</strong>
              <small className="text-muted-foreground">@{username}</small>
            </div>
          </div>

          <Switch
            checked={blocked}
            onCheckedChange={(blocked) => handleBlockedChange(id, blocked)}
          />
        </div>
      ))}
    </div>
  )
}
