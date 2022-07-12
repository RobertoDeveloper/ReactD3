import React from 'react';
import { Text } from './Text'; 

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        children: { control: 'text' }
    }
}

const Template = (args) => <Text {...args} />; 

export const AVariantHeader5 = Template.bind({}); 
AVariantHeader5.args = {
    variant: 'h5', 
    component: 'h5',
    children: 'Verify your identity'
};

export const BVariantBody1 = Template.bind({}); 
BVariantBody1.args = {
    variant: 'body1', 
    component: 'p',
    children: 'For your privacy and security, please enter your date of birth.'
};
