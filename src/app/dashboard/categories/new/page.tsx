import CategoryForm from '@/components/categories/categoryForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Next Full - Crear Categoría",
  description: "Crea una nueva categoría en Next Full",
}

export default function CategoryPage() {
  return (
    <div>
      <CategoryForm />
    </div>
  )
}
