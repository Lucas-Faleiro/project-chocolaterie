const realConverter = (value) => {
    const number = Number(value) || 0;
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number)
}

export default realConverter;

