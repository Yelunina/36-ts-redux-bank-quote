export const PUT_QUOTE = 'PUT_QUOTE'

export const putQuote = (quote: string) => ({
    type: PUT_QUOTE,
    payload: quote
})