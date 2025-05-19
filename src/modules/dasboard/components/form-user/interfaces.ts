import type {
  EditUserSchemaProps,
  NewUserSchemaProps,
} from "@/modules/dasboard/schemas";
import type { UseFormReturn } from "react-hook-form";

export interface FormUserProps {
  title: string;
  description: string;
  form: UseFormReturn<
    NewUserSchemaProps | EditUserSchemaProps,
    any,
    NewUserSchemaProps | EditUserSchemaProps
  >;
  isLoading: boolean;
  action?: "edit" | "new";
  currentRolesIds?: string[];
  onSubmit: (data: NewUserSchemaProps | EditUserSchemaProps) => Promise<void>;
}
