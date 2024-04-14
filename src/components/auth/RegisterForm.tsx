"use client";

import React from "react";
import { Button, Card, Input, Label } from "@/components/ui/index";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const data = await response.json();
      return;
    }

    const resSignIn = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    router.push("/dashboard");
    router.refresh();
  });

  return (
    <Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2" action="">
        <h3 className="text-2xl font-bold text-center mb-4">Register</h3>

        <Label>Name</Label>
        <Input type="text" placeholder="Your name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}

        <Label>Last name</Label>
        <Input
          type="text"
          placeholder="Your last name"
          {...register("lastname")}
        />
        {errors.lastname && (
          <p className="text-xs text-red-500">{errors.lastname.message}</p>
        )}

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
          Register
        </Button>
      </form>
    </Card>
  );
}
