'use client'

import { Box, Button, TextField } from "@mui/material"
import { Template } from "../components/Template"
import { Controller, useForm } from "react-hook-form"
import { FormProps } from "./scheme"

export default function Category() {
  const { handleSubmit, control} = useForm<FormProps>()

  const onSubmit = (data: FormProps) => console.log(data)

  return (
    <Template>
      <Box 
        onSubmit={handleSubmit(onSubmit)} 
        component={'form'} 
        sx={{display: 'flex', flexDirection: 'column', gap: 2}}
      >
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Controller 
            name="name"
            control={control}
            render={({ field: {onChange} }) => (
              <TextField
                id="name" 
                label="Nome" 
                variant="outlined"
                onChange={onChange}
              />
            )}
          />
        </Box>
        <Box>
          <Button type="submit">Enviar</Button>
        </Box>
      </Box>
    </Template>
  )
}