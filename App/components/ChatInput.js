import { compose } from 'recompose'

import {
    handleTextInput,
    withNextInputAutoFocusInput
} from "react-native-formik";

import { Input } from "react-native-elements";

const ChatInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(Input);

export default ChatInput