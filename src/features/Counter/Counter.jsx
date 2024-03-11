import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount,
} from './counterSlice';

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	const incrementValue = Number(incrementAmount) || 0;
	const navigate = useNavigate();
	return (
		<div className='mt-24'>
			<div>
				<button
					className="primaryBtn-cerfrance"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span>{count}</span>
				<button
					className="primaryBtn-cerfrance"
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
			<div>
				<input
					type="text"
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button className="primaryBtn-cerfrance" onClick={() => dispatch(incrementByAmount(incrementValue))}>
					Add Amount
				</button>
				<button className="primaryBtn-cerfrance" onClick={() => dispatch(incrementAsync(incrementValue))}>
					Add Async
				</button>
				<button className="primaryBtn-cerfrance" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
					Add If Odd
				</button>
			</div>
		</div>
	);
}
