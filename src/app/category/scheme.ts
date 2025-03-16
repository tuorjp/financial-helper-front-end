import * as z from 'zod'

export enum PropertyType {
  'Entrada' = 0,
  'Saída' = 1
}

export interface FormProps {
  type: PropertyType,
  name: string,
}

export const formSchema: FormProps = {
  type: PropertyType.Entrada,
  name: '',
}

export const formSchemaValidation = z.object({
  type: z.nativeEnum(PropertyType),
  name: z.string().trim().nonempty('Nome é um campo obrigatório')
})