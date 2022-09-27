import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from '../src'

const meta: Meta = {
  title: 'Buttons',
  component: Button,
  argTypes: {
    label: {
        name: 'label',
        type: 'string',
    },
    type: {
        name: 'Type',
        type: 'string',
        control: { type: 'select', options: ['default', 'link'] },
        defaultValue: 'default',
    },
    disabled: {
        control: 'boolean',
        defaultValue: false,
    }
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = args => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
    label: 'Aceptar'
}
