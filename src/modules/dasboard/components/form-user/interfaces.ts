import type {
  EditUserSchemaProps,
  NewUSerSchemaProps,
} from "@/modules/dasboard/schemas";
import type { UseFormReturn } from "react-hook-form";

export interface FormUserProps {
  title: string;
  description: string;
  form: UseFormReturn<
    EditUserSchemaProps | NewUSerSchemaProps,
    any,
    EditUserSchemaProps | NewUSerSchemaProps
  >;
  isLoading: boolean;
  action?: "edit" | "new";
  currentRolesIds?: string[];
  onSubmit: (data: EditUserSchemaProps | NewUSerSchemaProps) => Promise<void>;
}
