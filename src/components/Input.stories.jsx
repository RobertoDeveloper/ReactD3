import React from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const APlaceholder = Template.bind({});
APlaceholder.args = {
    placeholder: 'Type First Name'
}

export const BFilled = Template.bind({});
BFilled.args = {
    value: 'John Smith'
}

export const CError = Template.bind({});
CError.args = {
    value: 'John',
    error: true
}
