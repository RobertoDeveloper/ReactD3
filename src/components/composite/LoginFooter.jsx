import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'; 
import { SpaceContainer } from '../layout/SpaceContainer';
import { Text } from '../Text';
import Link from '@mui/material/Link';

const FirstContainer = styled('div')(
    ({ theme }) => `
        display: flex;
        justify-content: center;
    `
);

const FirstSubContainer = styled('div')(
    ({ theme }) => `
        max-width: 325px;
        text-align: center;
    `
);

const SecondContainer = styled('div')(
    ({ theme }) =>`
        display: flex;
        justify-content: center;
        p:last-child {
            margin-left: ${theme.spacing(2)}
        }
    `
);

/**
 * UI Login footer component
 */
export const LoginFooter = (props) => {
    return (
        <>
            <SpaceContainer bottomSize='sm'>
                <FirstContainer>
                    <FirstSubContainer>
                        <Text variant='body2'>
                            {props.description}
                        </Text>
                    </FirstSubContainer>
                </FirstContainer>
            </SpaceContainer>
      
            <SecondContainer>
                <Text variant='body2'>
                    <Link href='#' underline='none'>{props.linkOne}</Link>
                </Text>
                <Text variant='body2'>
                    <Link href='#' underline='none'>{props.linkTwo}</Link>
                </Text>
            </SecondContainer>
        </>
    )
} 

LoginFooter.propTypes ={
    /**
     * Text description
     */ 
     description: PropTypes.string.isRequired,
    /**
     * Link one text
    */
    linkOne: PropTypes.string.isRequired, 
    /**
    * Link two text
    */ 
    linkTwo: PropTypes.string.isRequired, 
};
