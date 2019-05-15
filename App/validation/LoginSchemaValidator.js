import * as yup from 'yup'

export const LoginSchemaValidator = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().required(),
});