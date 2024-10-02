import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ExchangeForm } from '@/components/ExchangeForm';

const meta = {
  title: 'Example/ExchangeForm',
  component: ExchangeForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ExchangeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
