import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    };

    return (
        <div style={{ marginLeft: '2rem' }}>
            <select onChange={handleCurrencyChange} >
                <option value="£">Pound (£)</option>
                <option value="$">Dollar ($)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Ruppee (₹)</option>
            </select>
        </div>

    );
};

export default CurrencySelector;