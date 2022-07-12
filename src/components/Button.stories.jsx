import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

const label = 'View Prescriptions';

const Template = (args) => <Button {...args} />;

export const APrimary = Template.bind({});
APrimary.args = {
  label
};

export const BLoading = Template.bind({});
BLoading.args = {
  label,
  loading: true
};

export const COutlined = Template.bind({}); 
COutlined.args = {
  label,
  variant: 'outlined'
}

export const DDisabled = Template.bind({});
DDisabled.args = {
    label,
    disabled: true
};
