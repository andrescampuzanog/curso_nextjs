"use client";
import { Button, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";

export default function ProductPage() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const product = await res.json();
    console.log(product);

  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Nombre del producto</Label>
        <Input {...register("name")} />

        <Label>Descripción del producto</Label>
        <Input {...register("description")} />

        <Label>Precio del producto</Label>
        <Input {...register("price")} />

        <Label>Image</Label>
        <Input {...register("image")} />

        <Button className="block mt-2">Crear Producto</Button>
      </form>
    </div>
  );
}
