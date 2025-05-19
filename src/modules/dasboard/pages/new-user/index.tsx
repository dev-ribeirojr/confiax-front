import { FormUser } from "@/modules/dasboard/components";
import { useNewUser } from "@/modules/dasboard/hooks";

export function NewUser() {
  const { form, isLoading, onSubmit } = useNewUser();

  return (
    <FormUser
      title={"Cadastro de Usuários"}
      description=" Para cadastrar um novo usuário é necessário preencher os campos
          abaixo!"
      isLoading={isLoading}
      form={form}
      onSubmit={onSubmit}
    />
  );
}
