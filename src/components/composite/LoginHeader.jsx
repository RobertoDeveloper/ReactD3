import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'; 
import { SpaceContainer } from '../layout/SpaceContainer';
import { Text } from '../Text';

const ResponsiveContainer = styled('div')(
    ({ theme }) => `
        @media (max-width: 500px) {
            max-width: 332px;
        }
    `
)

/** 
* UI Login Header
**/
export const LoginHeader = (props) => {
    return (
        <>
            <SpaceContainer bottomSize={props.bottomSize}>
                <Text variant='h5' component='h5'>
                    {props.header}
                </Text>
            </SpaceContainer>

            <ResponsiveContainer>
                <Text variant='body1' component='p'>
                    {props.subHeader}
                </Text>
            </ResponsiveContainer>
        </>
    )
}

LoginHeader.propTypes = {
    /**
     * Header text
    */
    header: PropTypes.string.isRequired,
    /**
     * SubHeader text
     */
    subHeader: PropTypes.string.isRequired,
    /**
    * What is the space size between the header and subheader text? 
    */ 
    bottomSize: PropTypes.oneOf(['none','sm', 'md', 'lg']).isRequired
};

LoginHeader.defaultProps = {
    bottomSize: 'sm'
};
