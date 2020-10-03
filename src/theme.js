import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiListItem: {
      root: {
        borderRadius: '5px',
        '&$selected': {
          backgroundColor: '#ECF7FD',
          '&:hover': {
            backgroundColor: '#ECF7FD',
          },
        },
      },
    },
  },
  cardWidth: '350px',
})

export default theme
