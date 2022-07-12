import LoadingButton from '@mui/lab/LoadingButton';
import PropTypes from 'prop-types';

/**
 * UI button component
 */
export const Button = ({ label, ...rest }) => {

    return (
        <LoadingButton type='submit' {...rest}>
            { label }
        </LoadingButton>
    )
}

Button.propTypes = {
    /**
     * What palette is being applied? 
    */ 
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
    /**
    * Is the button disabled? 
    */
    disabled: PropTypes.bool,
    /**
    * Is this a flat button?   
    */
    disableElevation: PropTypes.bool,
    /**
     * Does the button span across the screen? 
     */
    fullWidth: PropTypes.bool,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Is the button loading?
    */
    loading: PropTypes.bool,
    /**
     * Is this the principal call to action on the page?
     */
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  };
  
  Button.defaultProps = {
    disabled: false,
    disableElevation: true,
    fullWidth: true,
    loading: false,
    size: 'large',
    variant: 'contained',
    color: 'primary'
};

