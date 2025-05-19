import { z } from "zod";

export const editUserSchema = z.object({
  name: z.string().min(3, "Digite um nome válido").optional(),
  email: z.string().email("Digite um email válido").optional(),
  password: z.string().optional(),
  roles: z.array(z.string()).optional(),
});

export type EditUserSchemaProps = z.infer<typeof editUserSchema>;
