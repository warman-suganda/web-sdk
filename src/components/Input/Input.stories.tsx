import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloudArrowDownIcon from '../../Icon/CloudArrowDownIcon';
import Input, { InputProps } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(props: InputProps) {
  return <Input {...props} />;
}

export const Primary: ComponentStory<typeof Input> = Template.bind({});

Primary.args = {
  label: 'Label',
  leftAccessory: <CloudArrowDownIcon />,
  variant: 'secondary',
};
