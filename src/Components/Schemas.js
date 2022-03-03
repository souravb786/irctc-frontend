import * as yup from "yup";
export const SignupSchema = yup.object().shape({
  username: yup.string().min(3).max(26).required(),
  email: yup.string().email().required(),
  age: yup.number().required().positive().integer().min(18).max(60),
  phone: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(1000000000)
    .max(9999999999),
  password: yup.string().required().min(8),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const ticketSchema = yup.object().shape({
  source: yup.number().required().integer().positive().min(0),
  destination: yup.number().required().integer().positive().min(0),
  // date: yup.string().required(),
});

export const UpdateUserSchema = yup.object().shape({
  username: yup.string().min(3).max(26).required(),
  email: yup.string().email().required(),
  age: yup.number().required().positive().integer().min(18).max(60),
  phone: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(1000000000)
    .max(9999999999),
  password: yup.string().required().min(8),
});
