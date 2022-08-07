import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  layout: 'centered',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = { label: 'Default' }

export const Primary = Template.bind({})
Primary.args = { label: 'Primary', primary: true }

export const Secondary = Template.bind({})
Secondary.args = { label: 'Secondary' }
