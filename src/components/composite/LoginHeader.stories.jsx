import React from 'react';
import { LoginHeader } from './LoginHeader'; 

export default {
    title: 'CompositeComponents/LoginHeader',
    component: LoginHeader
} 

const Template = (args) => <LoginHeader {...args} />; 

export const ADefault = Template.bind({}); 
ADefault.args = {
    header: 'Verify your identity', 
    subHeader: 'For your privacy and security, please enter your date of birth.',
    bottomSize: 'sm'
};
