import React from 'react';
import { HelperText } from './HelperText';

export default {
  title: 'Components/HelperText',
  component: HelperText
};

const Template = (args) => <HelperText {...args} />;

export const AInfo = Template.bind({});
AInfo.args = {
    label: 'Make sure you enter your first and last name.'
}

export const BError = Template.bind({});
BError.args = {
    label: 'Date of Birth is a required field.',
    error: true
}
