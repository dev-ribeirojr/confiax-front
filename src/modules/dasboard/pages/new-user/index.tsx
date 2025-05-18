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
  Input,
  Separator,
} from "@/components/ui";
import { useNewUser } from "@/modules/dasboard/hooks";

export function NewUser() {
  const { form, isLoading, onSubmit } = useNewUser();

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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full "
          >
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
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
