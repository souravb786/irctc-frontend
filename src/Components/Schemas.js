import * as yup from "yup";
const SignupSchema = yup.object().shape({
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

export { SignupSchema };
