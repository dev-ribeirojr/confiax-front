import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenuLabel,
} from "@/components/ui";

interface CardUserDetailsProps {
  name: string;
  email: string;
}

export function CardUserDetails({ name, email }: CardUserDetailsProps) {
  const initialName = name?.slice(0, 2) || "";
  return (
    <DropdownMenuLabel className="p-0 font-normal">
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage src="" alt={name} />
          <AvatarFallback className="rounded-lg uppercase">
            {initialName}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold capitalize">{name}</span>
          <span className="truncate text-xs">{email}</span>
        </div>
      </div>
    </DropdownMenuLabel>
  );
}
