import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CurrencySelect } from '@/components/CurrencySelect';
import { btcCoin } from '@/temp';

const meta = {
  title: 'Example/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selectedCurrency: btcCoin,
    onAmountChange: fn(),
    onCurrencyChange: fn(),
  },
};
