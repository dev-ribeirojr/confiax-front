import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("Digite um email válido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, "A senha precisa ter pelo menos 6 digitos"),
});

export type SignInDto = z.infer<typeof signInSchema>;
