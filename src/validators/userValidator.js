import Joi from "joi";

export const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ ]{6,25}$/).required().messages({
        "string.pattern.base": "Name should contain only letters; from 6 to 25 letters",
        "string.required": "Write the name please"
    }),
    username: Joi.string().regex(/^[a-zA-Z]{4,15}$/).required().messages({
        "string.pattern.base": "Name should contain only latin letters; from 4 to 15 letters",
        "string.required": "Write the username please"
    }),
    email: Joi.string().regex(/^([A-Za-z0-9_\-.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).required().messages({
        "string.pattern.base": "Check your email please"
    }),
    address_street: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ0-9 \-.]{2,25}$/).required().messages({
        "string.pattern.base": "Street can contain letters of Latin or Cyrillic alphabet, numbers and symbols like .- . From 2 to 25 symbols"
    }),
    address_city: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ ]{2,30}$/).required().messages({
        "string.pattern.base": "City name should contain only letters; from 2 to 30 letters",
        "string.required": "Write the city please"
    }),
    address_suite: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ0-9‒\-’”„.,'*!&()= ]{3,30}$/).required().messages({
        "string.pattern.base": "Text can contain letters of Latin or Cyrillic alphabet, numbers and symbols like ‒ - ’ ”„ ․ * ! & (). From 3 to 30 symbols",
        "string.required": "Write the city please"
    }),
    address_zipcode: Joi.string().regex(/^[0-9 -]{4,17}$/).required().messages({
        "string.pattern.base": "Zipcode should contain only numbers, from 4 up to 17",
        "string.required": "Write the zipcode please"
    }),
    address_geo_lat: Joi.string().regex(/^[0-9 .-]{4,12}$/).required().messages({
        "string.pattern.base": "Geo lat should contain only numbers, from 4 up to 12",
        "string.required": "Write the lat please"
    }),
    address_geo_lng: Joi.string().regex(/^[0-9 .-]{4,12}$/).required().messages({
        "string.pattern.base": "Geo lng should contain only numbers, from 4 up to 12",
        "string.required": "Write the lng please"
    }),
    phone: Joi.string().regex(/^[0-9 -().x]{4,12}$/).required().messages({
        "string.pattern.base": "Phone should contain only 4-12 numbers and symbols like () -.x",
        "string.required": "Write the phone please"
    }),
    website: Joi.string().regex(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/).required().messages({
        "string.pattern.base": "Check the website please",
        "string.required": "Write the website please"
    }),
    company_name: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ -]{2,30}$/).required().messages({
        "string.pattern.base": "Company name should contain only 2-30 letters of Latin or Cyrillic alphabet",
        "string.required": "Write the company name please"
    }),
    company_catchPhrase: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ -]{2,30}$/).required().messages({
        "string.pattern.base": "Company catchPhrase should contain only letters of Latin or Cyrillic alphabet",
        "string.required": "Write the company catchPhrase please"
    }),
    company_bs: Joi.string().regex(/^[a-zA-Zа-яА-яЄєіІїЇ -]{2,30}$/).required().messages({
        "string.pattern.base": "Company bs should contain only letters of Latin or Cyrillic alphabet",
        "string.required": "Write the company bs please"
    })
})