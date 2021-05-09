export const barchartData = (data) => {

    const filterQuantity = (month) => {
        let quantity = data.filter(dataPizza => new Date(dataPizza.date).getMonth() === month);
        return quantity.length;
    }

    const addAmount = (month) => {
        let quantity = data.filter(dataPizza => new Date(dataPizza.date).getMonth() === month);        
        let amount = quantity.reduce((accumulator, {pizzaPrice}) => accumulator + pizzaPrice, 0)
        return amount
    }
    
    let dataChart = [
        {
            name: 'Enero',
            quantity: filterQuantity(1),
            amount: addAmount(1)
        },
        {
            name: 'Febrero',
            quantity: filterQuantity(2),
            amount: addAmount(2)
        },
        {
            name: 'Marzo',
            quantity: filterQuantity(3),
            amount: addAmount(3)
        },
        {
            name: 'Abril',
            quantity: filterQuantity(4),
            amount: addAmount(4)
        },
        {
            name: 'Mayo',
            quantity: filterQuantity(5),
            amount: addAmount(5)
        },
        {
            name: 'Junio',
            quantity: filterQuantity(6),
            amount: addAmount(6)
        },
        {
            name: 'Julio',
            quantity: filterQuantity(7),
            amount: addAmount(7)
        },
        {
            name: 'Agosto',
            quantity: filterQuantity(8),
            amount: addAmount(8)
        },
        {
            name: 'Septiembre',
            quantity: filterQuantity(9),
            amount: addAmount(9)
        },
        {
            name: 'Octubre',
            quantity: filterQuantity(10),
            amount: addAmount(10)
        },
        {
            name: 'Noviembre',
            quantity: filterQuantity(11),
            amount: addAmount(11)
        },
        {
            name: 'Diciembre',
            quantity: filterQuantity(12),
            amount: addAmount(12)
        },
    ]

    return dataChart;
    
}