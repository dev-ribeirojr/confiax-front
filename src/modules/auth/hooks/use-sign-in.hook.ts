import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema, type SignInDto } from "@/modules/auth/schemas";

export function useSignIn() {
  const form = useForm<SignInDto>({
    resolver: zodResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(params: SignInDto) {
    setIsLoading(true);

    console.log(params);

    setIsLoading(false);
  }

  return {
    form,
    isLoading,
    onSubmit,
  };
}
