import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

/** 
* UI Text component
**/
export const Text = ({ variant, component, ...rest }) => {
    return (
        <Typography variant={variant} component={component} {...rest}>
            {rest.children}
        </Typography>
    )
}

Text.propTypes = {
    /**
     * Applies the theme typography styles
    */
     variant: PropTypes.oneOf(['body1', 'body2', 'button', 
     'caption', 'h1', 'h2',
     'h3', 'h4', 'h5', 'h6', 
     'inherit', 'overline', 'subtitle1', 'subtitle2']).isRequired,
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
    */
    component: PropTypes.string,
    /**
    * The child content of the root node
    */
    children: PropTypes.node.isRequired
};

Text.defaultProps = {
    variant: 'body1',
};
