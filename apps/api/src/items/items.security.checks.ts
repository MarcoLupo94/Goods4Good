import validator from "validator";

//Making sure that each string property is escaped to prevent XSS
export const sanitizeInputs = (object) => {
    const sanitized = { ...object };
    Object.keys(sanitized).forEach((k) => {
        if (typeof sanitized[k] === 'string' && k !== 'img_url') {
            sanitized[k] = validator.escape(sanitized[k]);
        }
    })
    return sanitized;
}

export const validatePrice = (item) => {

    if (item.price === 0 || !validator.isCurrency('' + item.price, {
        require_symbol: false,
        decimal_separator: '.',
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [0, 1, 2]
    })) throw new Error('Price format is not correct');

}