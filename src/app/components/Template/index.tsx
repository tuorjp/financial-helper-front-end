'use client'

import { Box, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"

type TemplateProps = {
  children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: '100%',
        height: "100vh",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          px: 6,
          py: 4,
          width: '100%',
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

function Header() {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: "flex",
        background: "#5b21b6",
        width: '100%',
        height: 100,
        color: "#f1f5f9",
        alignItems: "center",
        justifyContent: "space-evenly",
        px: 4
      }}

    >
      <Box 
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Financial Helper
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flex: 1
        }}
      >
        <Typography
          variant="h6"
          onClick={() => router.push('/')}
          sx={{ cursor: "pointer" }}
        >
          Entradas/Saídas
        </Typography>
        <Typography
          variant="h6"
          onClick={() => router.push('/')}
          sx={{ cursor: "pointer" }}
        >
          Relatórios
        </Typography>
        <Typography
          variant="h6"
          onClick={() => router.push('/')}
          sx={{ cursor: "pointer" }}
        >
          Categorias
        </Typography>
        <Typography
          variant="h6"
          onClick={() => router.push('/')}
          sx={{ cursor: "pointer" }}
        >
          Conta
        </Typography>
      </Box>
    </Box>
  )
}