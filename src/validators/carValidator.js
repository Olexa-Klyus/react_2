import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        "string.pattern.base": "Бренд має містити лише літери; від 1 до 20-ти літер",
        "string.required": "Це поле потрібно заповнити",
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "enter a price greater then 0",
        "number.max": "enter a price up to one million"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "number.min": "enter a year greater or equal to 1990",
        "number.max": "year can`t be greater then current"
    })
})

export {carValidator};