import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithuntTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithuntTitle.args = {
  highlight: highlightMock,
  games: gamesMock
}

export const WithuntHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithuntHighlight.args = {
  title: 'Most popular',
  games: gamesMock
}

export const WithuntGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithuntGames.args = {
  title: 'Most popular',
  highlight: highlightMock
}
