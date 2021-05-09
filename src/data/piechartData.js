
export const piechartData = (data) => {

    const filterQuantity = (month) => {
        let quantity = data.filter(dataPizza => new Date(dataPizza.date).getMonth() === month);
        return quantity.length;
    }
    
    let dataChart = [
        {
            tag: 'Enero',
            valor: filterQuantity(1),
            color: '#f55c47'
        },
        {
            tag: 'Febrero',
            valor: filterQuantity(2),
            color: '#9fe6a0'
        },
        {
            tag: 'Marzo',
            valor: filterQuantity(3),
            color: '#907fa4'
        },
        {
            tag: 'Abril',
            valor: filterQuantity(4),
            color: '#cf0000'
        },
        {
            tag: 'Mayo',
            valor: filterQuantity(5),
            color: '#334443'
        },
        {
            tag: 'Junio',
            valor: filterQuantity(6),
            color: '#e1701a'
        },
        {
            tag: 'Julio',
            valor: filterQuantity(7),
            color: '#3d84b8'
        },
        {
            tag: 'Agosto',
            valor: filterQuantity(8),
            color: '#04009a'
        },
        {
            tag: 'Septiembre',
            valor: filterQuantity(9),
            color: '#f55c47'
        },
        {
            tag: 'Octubre',
            valor: filterQuantity(10),
            color: '#a58faa'
        },
        {
            tag: 'Noviembre',
            valor: filterQuantity(11),
            color: '#542e71'
        },
        {
            tag: 'Diciembre',
            valor: filterQuantity(12),
            color: '#114e60'
        },
    ]

    return dataChart;
    
}