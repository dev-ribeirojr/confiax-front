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
} from "@/components/ui";
import { useSignIn } from "@/modules/auth/hooks";

export function SignIn() {
  const { form, isLoading, onSubmit } = useSignIn();

  return (
    <main className="h-full flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <img
            src="src/assets/logo-confiax.webp"
            className="max-w-[180px] mx-auto my-2"
          />

          <div className="w-full mt-4">
            <CardTitle>Bem-vindo de volta</CardTitle>
            <CardDescription>
              Acesse sua conta para continuar gerenciando os usuários.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4 w-full "
            >
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
              <Button type="submit" isLoading={isLoading} className="mt-2">
                Acessar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
