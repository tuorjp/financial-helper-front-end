import * as z from 'zod'

export enum PropertyType {
  'Entrada' = 0,
  'Saída' = 1
}

export interface CategoryFormProps {
  type: PropertyType,
  name: string,
}

export const categoryFormSchema: Required<CategoryFormProps> = {
  type: PropertyType.Entrada, 
  name: '',
}

export const categoryFormSchemaValidation = z.object({
  type: z.nativeEnum(PropertyType).refine((val) => val !== undefined, {
    message: 'Tipo de categoria é obrigatório',
  }),
  name: z.string().trim().nonempty('Nome é um campo obrigatório')
})