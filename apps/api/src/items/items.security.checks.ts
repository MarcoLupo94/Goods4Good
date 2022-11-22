import validator from "validator";

//Making sure that each string property is escaped to prevent XSS
export const sanitizeInputs = (object) => {
    Object.keys(object).forEach((k) => {
        if (typeof object[k] === 'string' && k !== 'img_url') {
            object[k] = validator.escape(object[k]);
        }
    })
}

export const validatePrice = (item) => {

    if (item.price === 0 || !validator.isCurrency('' + item.price, {
        require_symbol: false,
        decimal_separator: '.',
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [0, 1, 2]
    })) throw 'Price format is not correct';

}