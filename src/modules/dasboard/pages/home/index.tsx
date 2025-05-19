import {
  Button,
  Card,
  CardDescription,
  CardTitle,
  Error,
  If,
  Loading,
} from "@/components/ui";
import { useDeleteUser } from "@/modules/dasboard/hooks";
import { useUsers } from "@/modules/dasboard/hooks/use-users";
import {
  CardUser,
  DialogDeleteUser,
} from "@/modules/dasboard/pages/home/components";
import { Plus } from "lucide-react";
import { Link } from "react-router";

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

  const {
    isOpen,
    isLoading: isLoadingDeleteUser,
    onSubmit,
    closeDialogDeleteUser,
    openDialogDeleteUser,
  } = useDeleteUser();

  if (isError) return <Error mutation={mutation} isLoading={isLoading} />;

  if (isLoading) return <Loading />;

  return (
    <>
      <div>
        <div className="flex justify-between mb-4 items-center">
          <div>
            <CardTitle>Lista de usuários</CardTitle>
            <CardDescription>Edite ou crie novos usuários</CardDescription>
          </div>

          <Link to={"/new-user"}>
            <Button>
              <Plus />
              Cadastrar
            </Button>
          </Link>
        </div>

        <If condition={!data.length && !isLoading}>
          <Card className="items-center justify-center gap-2">
            <CardTitle>Nenhum usuário foi encontrado</CardTitle>
            <CardDescription>
              Até o momento não foi cadastrado nenhum usuário
            </CardDescription>
          </Card>
        </If>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {data.map((item) => (
            <CardUser
              item={item}
              key={item.id}
              deleteUser={() => openDialogDeleteUser(item.id)}
            />
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

      <DialogDeleteUser
        isLoading={isLoadingDeleteUser}
        isOpen={isOpen}
        onSubmit={onSubmit}
        close={closeDialogDeleteUser}
      />
    </>
  );
}
