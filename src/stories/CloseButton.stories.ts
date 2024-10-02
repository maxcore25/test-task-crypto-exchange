import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CloseButton } from '@/components/CloseButton';

const meta = {
  title: 'Example/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
