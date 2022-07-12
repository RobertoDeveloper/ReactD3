import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'; 

const SectionContainer = styled('div', { shouldForwardProp: (prop) => prop !== 'bottomSize' })
(
  ({ theme, ...rest }) => {
    const bottomSpaces = {
      sm: theme.spacing(2),
      md: theme.spacing(4.25),
      lg: theme.spacing(6.50) 
    };
    return `margin-bottom: ${bottomSpaces[rest.bottomSize]}`
  }
) 

export const SpaceContainer = ({bottomSize, ...rest}) => {

  return (
    <SectionContainer bottomSize={bottomSize}>
      { rest.children }
    </SectionContainer>
  )
}

SpaceContainer.propTypes = {
  /**
    * What is the size of the bottom margin? 
  */ 
  bottomSize: PropTypes.oneOf(['none','sm', 'md', 'lg']).isRequired
}; 
