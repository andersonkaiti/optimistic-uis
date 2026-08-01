import { Skeleton } from '../ui/skeleton'

export function UsersListSkeleton() {
  return Array.from({ length: 4 }, (_, index) => index).map((index) => (
    <div
      key={index}
      className="flex h-18 items-center justify-between rounded-md border p-4"
    >
      <div className="flex items-center gap-4">
        <Skeleton className="size-8" />

        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-15" />
        </div>
      </div>

      <Skeleton className="h-4.5 w-8" />
    </div>
  ))
}
