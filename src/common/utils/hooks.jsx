import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => setValue(e.target.value);

  return {
    value,
    handleInputChange
  };
}
