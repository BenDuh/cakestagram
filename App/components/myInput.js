import React from 'react'

import { compose } from 'recompose'

import {
    handleTextInput,
    withNextInputAutoFocusInput
} from "react-native-formik";

import { TextField } from "react-native-material-textfield";

const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextField);

export default MyInput