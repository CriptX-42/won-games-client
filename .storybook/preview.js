import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

// .storybook/preview.js

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-white',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackground />
      <Story />
    </ThemeProvider>
  )
]
