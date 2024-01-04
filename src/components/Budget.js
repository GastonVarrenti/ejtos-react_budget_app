import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    useEffect(() => {
        setNewBudget(budget); 
    }, [budget]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleSave = () => {
        const budgetValue = parseFloat(newBudget);
        const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

        if (budgetValue > 20000) {
            setError('Budget cannot exceed 20,000.'); 
        } else if (budgetValue < totalExpenses) {
            setError('Budget cannot be less than the total expenses.'); 
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue
            });
            setError(''); 
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSave();
        }
    };

    return (
        <div className='alert alert-secondary'>
            {error && <div className="alert alert-danger">{error}</div>}
            <span>Budget: {currency}{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={handleSave} 
                onKeyPress={handleKeyPress} 
            />
        </div>
    );
};
export default Budget;