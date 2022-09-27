import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Text } from '../src'
import { Props } from '../src/components/Text'

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Props> = args => <Text {...args} />

// Al pasar usando el formato Args para historias exportadas, puede controlar los accesorios de un componente para su reutilización en una prueba
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {}
