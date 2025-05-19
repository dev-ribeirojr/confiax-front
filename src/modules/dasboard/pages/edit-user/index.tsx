import { FormUser } from "@/modules/dasboard/components";
import { useEditUser } from "@/modules/dasboard/hooks";

export function EditUser() {
  const { form, isLoading, currentRolesIds, onSubmit } = useEditUser();

  return (
    <FormUser
      title={"Edição de Usuário"}
      description="Edite os dados do usuário abaixo para prosseguir!"
      isLoading={isLoading}
      form={form}
      onSubmit={onSubmit}
      action="edit"
      currentRolesIds={currentRolesIds}
    />
  );
}
