import { useState } from 'react';
import { deposit, withdraw } from '../actions/accountActions';
import { useDispatch } from 'react-redux';
import { putQuote } from '../actions/quoteAction';

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    const fetchQoute = () => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => data.sentence)
            .then(quote => dispatch(putQuote(quote as string)))
            .catch(() => dispatch(putQuote('Error')))
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    onChange={e => setSum(+e.target.value)}
                    type="number"
                    value={sum}
                    min={0}
                />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(deposit(sum))}
                >Deposit</button>
            </div >
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-info btn-lg'
                    onClick={fetchQoute}
                >Get Quote</button>
            </div>
        </>
    )
}

export default Operation