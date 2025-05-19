import { z } from "zod";

export const newUserSchema = z.object({
  name: z.string({ required_error: "Campo obrigatório" }),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("Digite um email válido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, "A senha precisa ter pelo menos 6 digitos"),
  roles: z.array(z.string()).optional(),
});

export type NewUSerSchemaProps = z.infer<typeof newUserSchema>;
