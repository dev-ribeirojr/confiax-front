import { CardUser } from "@/modules/dasboard/pages/home/components";

export function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ">
        <CardUser />
        <CardUser />
        <CardUser />
      </div>
    </div>
  );
}
