import React from 'react';
import { DateOfBirthInput } from './DateOfBirthInput';

export default {
  title: 'Components/DateOfBirthInput',
  component: DateOfBirthInput
};

const Template = (args) => <DateOfBirthInput {...args} />;

export const APlaceholder = Template.bind({}); 
APlaceholder.args = { }

export const BFilled = Template.bind({}); 
BFilled.args = {
    value: '4/20/1982'
}
