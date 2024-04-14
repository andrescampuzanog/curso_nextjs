import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";

export default async function ProductPage() {
  const session = await getServerSession(authOptions);
  const products = await prisma.product.findMany({
    where: {
      authorId: session?.user.id,
    },
  });

  return (
    <div>
      <h1>Lista de products</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
