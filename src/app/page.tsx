"use client"

import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { Template } from "./components/Template";

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <Template>
      <Box>
        Bem-vindo ao Financial helper
      </Box>
    </Template>
  );
}
