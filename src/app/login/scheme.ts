import * as z from 'zod'

export interface AuthFormProps {
    email: string;
    password: string;
}

export const authFormSchema: AuthFormProps = {
    email: '',
    password: ''
}

export const authFormSchemaValidation = z.object({
    email: z.string().trim().nonempty("You need an email to sign in.").email("Please insert a valid email"),
    password: z.string().min(8, "Insert at least 8 characters in password").nonempty("Please, insert a password")
})