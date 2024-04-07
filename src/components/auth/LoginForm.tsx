"use client";

import { Button, Card, Input, Label } from "@/components/ui/index";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const [error, setError] = useState<string | null>("");

  const onSubmit = handleSubmit(async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!result?.ok) {
      setError(result?.error);
      return;
    }

    router.push("/dashboard");
  });

  return (
    <Card>
      {error && (
        <div className="bg-red-100 border-red-500 text-red-700 p-4 border-l-4 mb-2">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="flex flex-col gap-y-2" action="">
        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>

        <Label>Email</Label>
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
        <Button className="block w-full mt-2" type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
}
