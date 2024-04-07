"use client";
import { Button, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema } from "@/schemas/categorySchema";

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategorySchema),
  });

  const onSumbit = handleSubmit(async (data) => {
    console.log(data);

    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  });

  return (
    <form onSubmit={onSumbit}>
      <Label>Nombre de la categoría</Label>
      <Input {...register("name")} />
      {errors?.name && <p className="text-red-500">{errors.name.message}</p>}

      <Label>Descripción de la categoría</Label>
      <Input {...register("description")} />

      <Label>Publicado</Label>
      <Input type="checkbox" {...register("published")} />

      <Button className="block mt-2">Crear Categoría</Button>
    </form>
  );
}
