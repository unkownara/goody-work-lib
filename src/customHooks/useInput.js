import { useState } from 'react';

/*
    Custom hooks for setting input values by using useState(Hooks) method.
 */
export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function onChangeHandler(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: onChangeHandler
    }
}