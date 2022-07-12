import PropTypes from 'prop-types';
import { useState } from 'react'; 
import { Button } from '../Button';
import { DateOfBirthInput } from './DateOfBirthInput';
import { HelperText } from '../HelperText';
import { SpaceContainer } from '../layout/SpaceContainer';

/**
 * UI Login Form component
*/
export const LoginForm = ({ defaultValue, onSubmit, loading }) => {
    const [dobMasked, setDobMasked] = useState(defaultValue || '');
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [formError, setFormError] = useState(false);
    const [textFieldBlur, setTextFieldBlur] = useState(false);

    /**
    * Event handlers
    */   

    const handleMaskedChange = (event) => {
        const value = event.target.value
        setDobMasked(value);    
        enableOrDisableBtn(value);
    }

    const handleBlur = () => {
        setTextFieldBlur(true);
        setFormError(!isFormValid(dobMasked));
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSubmit(dobMasked);
    }

    /**
    * Helpers
    */   

    const isFormValid = value => value && !/D|M|Y/.test(value);
    
    const enableOrDisableBtn = (value) => {
        if (isFormValid(value)) {
            setDisabledBtn(false);
            setFormError(false);
            return; 
        } 
        
        setDisabledBtn(true);

        // set form error only after blur
        if (textFieldBlur) {
            setFormError(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <SpaceContainer bottomSize='md'>
                    <DateOfBirthInput
                        error={formError}
                        fullWidth 
                        onBlur={handleBlur}
                        onChange={handleMaskedChange}
                        name='login-dob'
                        type='tel' 
                        value={dobMasked} />   
                    {
                        formError && 
                        <HelperText show={formError} error={formError} label='Date of Birth is a required field' />
                    }
                </SpaceContainer>

                <Button label='View Prescriptions' loading={loading} disabled={disabledBtn} />
            </form>
        </>
    )
}

LoginForm.propTypes = {
    /**
     * Is the form being submitted?
    */
    loading: PropTypes.bool,
    /**
     * Event handler that handles the form submission. 
    */
    onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
    loading: false,
    onSubmit: () => {}
};
