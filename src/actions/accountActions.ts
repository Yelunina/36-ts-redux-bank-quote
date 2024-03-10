export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

export const deposit = (sum: number) => ({
    type: DEPOSIT,
    payload: sum
})

export const withdraw = (sum: number) => ({
    type: WITHDRAW,
    payload: sum
})