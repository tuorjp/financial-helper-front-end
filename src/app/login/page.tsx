import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AuthFormProps, authFormSchema, authFormSchemaValidation } from "./scheme";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthFormProps>({
    resolver: zodResolver(authFormSchemaValidation),
    defaultValues: authFormSchema
  })

  function onSubmit(userData: AuthFormProps) {
    try {
      console.log(userData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 4,
          borderRadius: 2,
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Sign in</Typography>
        <Box
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            minWidth: 300
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  id="email"
                  label="Email"
                  size="small"
                  variant="outlined"
                  {...field}
                  value={field.value}
                />
              )}
            />
            {errors.email && <Typography color="red" fontSize={12}>{errors.email?.message}</Typography>}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  id="password"
                  label="Password"
                  size="small"
                  variant="outlined"
                  {...field}
                  value={field.value}
                />
              )}
            />
            {errors.password && <Typography color="red" fontSize={12}>{errors.password?.message}</Typography>}
            <Box sx={{display: 'flex', flexDirection: 'column', mt: 2}}>
              <Button color="secondary" variant="contained" type="submit" >
                Sign in
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}