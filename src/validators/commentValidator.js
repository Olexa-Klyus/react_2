import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required().messages({
        "number.min": "enter a postId from 1",
        "number.max": "there are only 100 posts"
    }),
    name: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ ]{1,25}$/).required().messages({
        "string.pattern.base": "Name should contain only letters; from 1 to 25 letters",
        "string.required": "Write the name please",
    }),
    email: Joi.string().regex(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).required().messages({
        "string.pattern.base": "Check your email please"
    }),
    body: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ0-9‒\-’”„.,'*!@$%&()= ]{1,250}$/).required().messages({
        "string.pattern.base": "Text can contain letters of Latin or Cyrillic alphabet, numbers and symbols like ‒ - ’ ”„ ․ * ! @ $ % & (). From 1 to 250 symbols",
        "string.required": "Write your comment please",
    }),

})

export {commentValidator};