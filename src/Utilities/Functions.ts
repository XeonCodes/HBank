// Currency Formater
export const CurrencyFormat = (number:number) => {
    const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
    return format.format(number)

}