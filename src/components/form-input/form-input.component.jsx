import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) => {
  const { handleChange, label, ...otherProps } = props;

  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${props.value.lenght ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
