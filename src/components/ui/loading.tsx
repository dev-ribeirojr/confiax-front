import { Logo } from "@/components/ui/logo";

export function Loading() {
  return (
    <div className=" flex-1 flex items-center justify-center">
      <div className="h-28 w-28 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-primary to-90% animate-spin" />
      <div className="h-[106px] w-[106px] bg-white rounded-full absolute flex items-center justify-center p-4">
        <Logo />
      </div>
    </div>
  );
}
