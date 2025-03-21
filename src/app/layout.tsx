'use client'

import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useSyncUserWithAuth } from '@/context/userStore'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  useSyncUserWithAuth()

  return (
    <html lang='en'>
      <body suppressHydrationWarning>
          <AppRouterCacheProvider>
            <CssBaseline />
            {children}
          </AppRouterCacheProvider>
      </body>
    </html>
  )
}
