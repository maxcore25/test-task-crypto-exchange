import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SwapButton } from '@/components/SwapButton';

const meta = {
  title: 'Example/SwapButton',
  component: SwapButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof SwapButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
