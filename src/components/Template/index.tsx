'use client'

import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GithubLogo } from 'phosphor-react'

type TemplateProps = {
  children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Header />
      <Box
        sx={{
          px: 6,
          py: 4,
          width: '100%',
          height: '100vh',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

function Header() {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        background: '#5b21b6',
        width: '100%',
        height: 100,
        color: '#f1f5f9',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        px: 4,
      }}
    >
      <Box
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant='h3' fontWeight={'bold'}>
          Ajudante Financeiro
        </Typography>
      </Box>

      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flex: 1,
        }}
      >
        <Typography
          variant='h6'
          onClick={() => router.push('/')}
          sx={{ cursor: 'pointer' }}
        >
          Entradas/Saídas
        </Typography>
        <Typography
          variant='h6'
          onClick={() => router.push('/')}
          sx={{ cursor: 'pointer' }}
        >
          Relatórios
        </Typography>
        <Typography
          variant='h6'
          onClick={() => router.push('/')}
          sx={{ cursor: 'pointer' }}
        >
          Categorias
        </Typography>
        <Typography
          variant='h6'
          onClick={() => router.push('/')}
          sx={{ cursor: 'pointer' }}
        >
          Conta
        </Typography>
      </Box>
    </Box>
  )
}

function Footer() {
  return (
    <Box
      sx={{
        background: '#5b21b6',
        width: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>
          Desenvolvido por: João Pedro Leite Marotinho
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit',
        }}
        component={'a'}
        href='https://github.com/tuorjp'
        target='_blank'
      >
        <Typography>
          Clique para ver mais projetos!
        </Typography>
        <GithubLogo size={24} />
      </Box>
    </Box>
  )
}