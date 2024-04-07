import {z} from 'zod'

export const createCategorySchema = z.object({
    name: z.string().min(3, {message:"el nombre de la categoría debe tener al menos 3 caracteres"}).max(255),
    description: z.string({invalid_type_error: "La description de la categoría debe ser un texto"}).min(3).optional(),
    published: z.boolean({invalid_type_error: "El campo publicado debe ser un booleano"}).optional(),
})