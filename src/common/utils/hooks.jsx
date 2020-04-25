import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    if(typeof(e) === 'string'){
      setValue(e);
    }else{ //if event
      setValue(e.target.value)
    }
  };

  return {
    value,
    handleInputChange,
    reset: () => setValue(''),
  };
};


