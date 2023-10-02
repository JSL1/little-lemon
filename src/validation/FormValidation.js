import * as yup from 'yup';

export const userSchema = yup.object({
    resFirstName: yup.string().required("Please enter your first name."),
    resLastName: yup.string().required("Please enter your last name."),
    resEmail: yup.string().email("Must be a valid email address.").required("Please enter your email."),
    resPhone: yup.string("Must be a valid 7-11 digit number").required("Please enter your phone number.").min(7).max(11),
    resDate: yup.date().required("Please enter a date for your reservation."),
    resTime: yup.string().required("Please select a time."),
    guests: yup.number().required("Please input the number of guests that will be joining us.").positive().integer(),
    occasion:yup.string(),
});
