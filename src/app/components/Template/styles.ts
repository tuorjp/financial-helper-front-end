import { SxProps, Theme } from '@mui/material'

const containerTemplate: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    minHeight: '100vh',
    alignItems: 'center',
}

const bodyContainerTemplate: SxProps<Theme> = {
    px: 6,
    py: 4,
    width: '100%',
    height: '100vh',
}

const containerHeader: SxProps<Theme> = {
    display: 'flex',
    background: '#5b21b6',
    width: '100%',
    height: 100,
    color: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    px: 4,
}

const containerHeaderLogo: SxProps<Theme> = {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
}

const containerHeaderLinks: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
}

export {
    containerTemplate,
    bodyContainerTemplate,
    containerHeader,
    containerHeaderLogo,
    containerHeaderLinks,
}