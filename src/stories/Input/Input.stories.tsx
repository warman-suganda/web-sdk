import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloudArrowDownIcon from '../../Icon/CloudArrowDownIcon';
import Input, { InputProps } from '../../components/Input';

import MDXDocumentation from './Input.stories.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input/Playground',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: MDXDocumentation,
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(props: InputProps) {
  return <Input {...props} />;
}

export const Playground: ComponentStory<typeof Input> = Template.bind({});

Playground.args = {
  label: 'Label',
  leftAccessory: <CloudArrowDownIcon />,
  rightAccessory: <CloudArrowDownIcon />,
  variant: 'secondary',
  size: 'sm',
};
