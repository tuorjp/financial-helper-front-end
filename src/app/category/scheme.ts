import * as z from 'zod'

export enum PropertyType {
  'Entrada' = 0,
  'Saída' = 1
}

export interface FormProps {
  type: PropertyType,
  name: string,
}

export const formSchema: Required<FormProps> = {
  type: PropertyType.Entrada, 
  name: '',
}

export const formSchemaValidation = z.object({
  type: z.nativeEnum(PropertyType).refine((val) => val !== undefined, {
    message: 'Tipo de categoria é obrigatório',
  }),
  name: z.string().trim().nonempty('Nome é um campo obrigatório')
})