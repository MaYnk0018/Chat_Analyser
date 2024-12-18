import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generate10DigitPhoneNumber } from "@/lib/utils/generate10DigitPhoneNumber";



export function RecentSales({
  topMessageCountUsers}) {
  return (
    <div className="space-y-8">
      {topMessageCountUsers.map((author: any) => {
        return (
          <div className="flex items-center" key={author.author}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>{" "}
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {author.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {generate10DigitPhoneNumber()}
              </p>
            </div>
            <div className="ml-auto font-medium">{author._count.message}</div>
          </div>
        );
      })}
    </div>
  );
}
