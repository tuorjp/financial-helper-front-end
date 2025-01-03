'use client'

import { Box, Grid2, Typography } from '@mui/material'
import { Template } from './components/Template'
import { CustomCard } from './components/CustomCard'

export default function Home() {
  return (
    <Template>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box mb={5} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography variant='h4'>
            Bem-vindo ao Financial helper!!
          </Typography>
        </Box>
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <CustomCard
              title='Entradas/Saídas'
              text='Mantenha tudo registrado!! Registre as entradas e as saídas, separando por categorias e rastreando as datas de seus gastos 📝💲'
              route='/'
            />
          </Grid2>
          <Grid2 size={3}>
            <CustomCard
              title='Relatórios'
              text='Visualize suas movimentações financeiras em forma de tabela ou gráfico, filtrando por período e categoria 📈📉'
              route='/'
            />
          </Grid2>
          <Grid2 size={3}>
            <CustomCard
              title='Categorias'
              text='Registre cada tipo de gasto e ganho!! Cadastre as categorias de gastos e ganhos 🔍💰'
              route='/'
            />
          </Grid2>
          <Grid2 size={3}>
            <CustomCard
              title='Conta'
              text='Edite e atualize seus dados ou exclua sua conta 🧑👩. Caso vá excluir sua conta, obrigado por escolher o Financial Helper!!'
              route='/'
            />
          </Grid2>
        </Grid2>
      </Box>
    </Template>
  );
}
