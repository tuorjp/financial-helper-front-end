import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { UserProvider } from './context/UserContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <UserProvider>
          <AppRouterCacheProvider>
            <CssBaseline />
            {children}
          </AppRouterCacheProvider>
        </UserProvider>
      </body>
    </html>
  )
}
