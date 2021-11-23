import * as Yup from 'yup';

const BadRequestError = Yup.object({
    messages: Yup.array().of(Yup.string)
})

export default {
    BadRequestError
}