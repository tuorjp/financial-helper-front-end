'use client'

import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { bodyContainerTemplate, containerHeader, containerHeaderLinks, containerHeaderLogo, containerTemplate, footerContainer, footerLinksContainers } from './styles'
import { GithubLogo } from 'phosphor-react'

type TemplateProps = {
  children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Box sx={containerTemplate}>
      <Header />
      <Box sx={bodyContainerTemplate}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

function Header() {
  const router = useRouter()

  return (
    <Box sx={containerHeader}>
      <Box sx={containerHeaderLogo}>
        <Typography variant='h3' fontWeight={'bold'}>
          Financial Helper
        </Typography>
      </Box>

      <Box sx={containerHeaderLinks}>
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
      sx={footerContainer}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>
          Desenvolvido por: João Pedro Leite Marotinho
        </Typography>
      </Box>
      <Box
        sx={footerLinksContainers}
        component={'a'}
        href='https://github.com/tuorjp'
        target='_blank'
      >
        <Typography>
          Click to see more projects!
        </Typography>
        <GithubLogo size={24} />
      </Box>
    </Box>
  )
}