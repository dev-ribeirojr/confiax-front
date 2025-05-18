import { Button, Error, If, Loading } from "@/components/ui";
import { useUsers } from "@/modules/dasboard/hooks/use-users";
import { CardUser } from "@/modules/dasboard/pages/home/components";

export function Home() {
  const {
    data,
    isError,
    isLoading,
    isLoadingNextPage,
    hasNextPage,
    nextPage,
    mutation,
  } = useUsers();

  if (isError) return <Error mutation={mutation} isLoading={isLoading} />;

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {data.map((item) => (
          <CardUser item={item} key={item.id} />
        ))}
      </div>
      <If condition={hasNextPage}>
        <Button
          onClick={nextPage}
          isLoading={isLoadingNextPage}
          className="mt-4 w-full"
        >
          Buscar Mais
        </Button>
      </If>
    </div>
  );
}
