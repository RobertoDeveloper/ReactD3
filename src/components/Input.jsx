import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';

/**
 * UI input component
 */
export const Input = ({ ...props }) => {

    return (
        <OutlinedInput { ...props } />
    )
} 

Input.propTypes = {
    /**
     * Placeholder text 
    */
    placeholder: PropTypes.string,
    /**
     * Does the input span across the screen? 
    */
    fullWidth: PropTypes.bool,
    /**
     * Is the input in an error state?
    */
    error: PropTypes.bool,
    /**
     * The value of the input
    */
    value: PropTypes.string,
    /**
     * What is the type of the input? 
     */ 
    type: PropTypes.oneOf(['text', 'search', 'tel', 'none', 'url', 'email', 'numeric', 'decimal']),
    /**
     * What is the name of the dom element?
     */ 
    name: PropTypes.string,
    /**
     * Handler when user leaves input
    */
    onBlur: PropTypes.func,
    /**
     * Handler when user types
    */
    onChange: PropTypes.func,
    /**
     * What component should inherit the input styles?
    */
    inputComponent: PropTypes.object
};

Input.defaultProps = {
    type: 'text',
    fullWidth: true,
    error: false,
    inputComponent: null,
    onBlur: () => {},
    onChange: () => {}
};
