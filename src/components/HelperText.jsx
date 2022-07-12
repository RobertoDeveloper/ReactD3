import PropTypes from 'prop-types';
import FormHelperText from '@mui/material/FormHelperText';
import Fade from '@mui/material/Fade';

/**
 * UI helper text component
 */
export const HelperText = ({ show, error, label }) => { 
    return (
        <Fade in={show} style={{ transitionDelay: '150ms' }}>
            <FormHelperText error={error}>{label}</FormHelperText>
        </Fade>
    )
}

HelperText.propTypes = {
    /**
     * Is text in a error state?
    */
    error: PropTypes.bool,
    /**
     * Text content
    */
    label: PropTypes.string,
    /**
     * Is text visible?
    */
    show: PropTypes.bool,
};

HelperText.defaultProps = {
    error: false,
    label: '',
    show: true, 
};