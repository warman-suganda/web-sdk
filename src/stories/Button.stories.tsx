import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(props: ButtonProps) {
  return <Button {...props} />;
}

export const Primary: ComponentStory<typeof Button> = Template.bind({});

Primary.args = {
  children: 'Button',
};
