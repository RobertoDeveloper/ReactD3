import React from 'react';
import { HelperText } from '../HelperText';
import { Input } from '../Input';
import { SpaceContainer } from './SpaceContainer';

export default {
  title: 'Layout/SpaceContainer',
  component: SpaceContainer
};

const Template = (args) => <>
    <SpaceContainer {...args} >
        <HelperText label='First Name' />
    </SpaceContainer>
    <SpaceContainer>
        <Input />
    </SpaceContainer>
</>;

export const ANoBottomMargin = Template.bind({});
ANoBottomMargin.args = {
    bottomSize: 'none'
}

export const ASmallBottomMargin = Template.bind({});
ASmallBottomMargin.args = {
    bottomSize: 'sm'
}

export const BMediumBottomMargin = Template.bind({});
BMediumBottomMargin.args = {
    bottomSize: 'md'
}

export const CLargeBottomMargin = Template.bind({});
CLargeBottomMargin.args = {
    bottomSize: 'lg'
}
