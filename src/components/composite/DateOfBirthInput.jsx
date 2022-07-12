import * as React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { IMaskInput, IMask } from 'react-imask';

const TextMaskDob = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...rest } = props;

    return (
      <IMaskInput
        {...rest}
        mask={'m{/}d{/}{Y}'}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: rest.name, value } })}
        lazy={false}
        blocks={{
          d: { mask: IMask.MaskedRange, placeholderChar: 'D', from: 1, to: 31, maxLength: 2, autofix: 'pad' },
          m: { mask: IMask.MaskedRange, placeholderChar: 'M', from: 1, to: 12, maxLength: 2, autofix: 'pad' },
          Y: { mask: IMask.MaskedRange, placeholderChar: 'Y', from: 1900, to: 2022, maxLength: 4 }
          }}
      />
    );
});

/**
 * UI date of birth input component
 */
export const DateOfBirthInput = ({ ...props }) => {

  return (
      <Input inputComponent={TextMaskDob} { ...props } />
  )
} 

DateOfBirthInput.propTypes = {
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
     * Handler when user leaves input
    */
    onBlur: PropTypes.func,
    /**
     * Handler when user types
    */
    onChange: PropTypes.func
};

DateOfBirthInput.defaultProps = {
  fullWidth: true,
  error: false,
  value: '',
  onBlur: () => {},
  onChange: () => {}
};
