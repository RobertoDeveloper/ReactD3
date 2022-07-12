import React from 'react';
import { LoginForm } from './LoginForm';

export default {
  title: 'CompositeComponents/LoginForm',
  component: LoginForm
};

const Template = (args) => <LoginForm {...args} />;

export const ADefault = Template.bind({});
ADefault.args = {
}

export const BFilled = Template.bind({});
BFilled.args = {
    defaultValue: '04201982'
}
