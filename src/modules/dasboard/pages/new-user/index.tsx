import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  If,
  Input,
  Label,
  Separator,
} from "@/components/ui";
import { Switch } from "@/components/ui/switch";
import { useNewUser, useRoles } from "@/modules/dasboard/hooks";

import { BiLoaderCircle } from "react-icons/bi";

export function NewUser() {
  const { form, isLoading, onSubmit } = useNewUser();

  const { isLoading: isLoadingRoles, roles } = useRoles();

  return (
    <Card className="py-4 ">
      <CardHeader className="px-4">
        <CardTitle>Cadastro de Usuários</CardTitle>

        <CardDescription>
          Para cadastrar um novo usuário é necessário preencher os campos
          abaixo!
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardDescription className="mb-2">Permissões</CardDescription>
            <If
              condition={!isLoadingRoles}
              elseRender={
                <div className="flex items-center justify-center">
                  <BiLoaderCircle
                    className="animate-spin text-primary"
                    size={30}
                  />
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full  mb-4">
                {roles.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="roles"
                    render={({ field }) => {
                      const isChecked = field.value?.includes(item.id);

                      function handleCheckedChange(checked: boolean) {
                        if (checked) {
                          field.onChange([...field.value!, item.id]);
                        } else {
                          field.onChange(
                            field.value?.filter((id) => id !== item.id)
                          );
                        }
                      }

                      return (
                        <FormItem className="flex flex-row items-center gap-2">
                          <FormControl>
                            <Switch
                              checked={isChecked}
                              onCheckedChange={handleCheckedChange}
                              id={item.id}
                            />
                          </FormControl>

                          <div className="space-y-0.5">
                            <Label htmlFor={item.id}>{item.role}</Label>
                          </div>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
            </If>

            <Separator className="my-4" />

            <CardDescription className="mb-2">Dados pessoais</CardDescription>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do usuário" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@email.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                isLoading={isLoading}
                className="md:col-start-3 lg:col-start-4 sm:mt-[18px] md:mt-0 lg:mt-[18px]"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
