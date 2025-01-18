import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './alert';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Alert',
  component: 'pp-alert',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'success',
        'neutral',
        'warning',
        'danger'
      ],
    },
    open: {
      control: { type: 'boolean' },
    },
    closable: {
      control: { type: 'boolean' },
    },
    duration: {
      control: { type: 'number' },
    },
    countdown: {
      control: { type: 'select' },
      options: ['rtl', 'ltr', undefined],
    },
  },
  args: {
    variant: 'primary',
    open: true,
    closable: true,
    duration: 100,
    countdown: 'rtl'
  },
  render: ({ variant, closable, open, duration, countdown }) =>
    html`<pp-alert
      variant=${variant}
      ?open=${open}
        ?closable=${closable}
        duration=${duration}
        countdown=${countdown}
    >
      Alert message
    </pp-alert>`,
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};