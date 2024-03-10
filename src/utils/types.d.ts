export interface RootState {
    balance: number,
    quote: string
}

export interface ReduxAction {
    type: string,
    payload: any
}