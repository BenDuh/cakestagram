import * as yup from 'yup'

export const LoginSchemaValidator = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().required(),
});
export const SignupSchemaValidator = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().required('Password requis'),
    prenom: yup.string().required('Prénom requis'),
    nom: yup.string().required('Nom requis'),
});