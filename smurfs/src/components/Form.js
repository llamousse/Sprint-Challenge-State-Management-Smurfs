import React from 'react';
import axios from 'axios';
import { Form , Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, isSubmitting }) => {
    return (
        <div className="register-form">
            <h5>Add Smurf</h5>
                <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                    <Field type="text" name="age" placeholder="Age" />
                    {touched.age && errors.age && (
                        <p className="error">{errors.age}</p>
                    )}
                    <Field type="text" name="height" placeholder="Height (cm)" />
                    {touched.height && errors.height && (
                        <p className="error">{errors.height}</p>
                    )}
                    <br />
                    <button type="submit" disabled={isSubmitting}>Add Smurf</button>
                </Form>
        </div>
    );
};

const RegisterForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Smurf name is required'),
        age: Yup.string()
            .required('Age is required'),
        height: Yup.string()
            .required('Height is required')
    }),

    handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
        axios.post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res)
                setStatus(res.data);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err.response);
                setSubmitting(false);
            });
    }

})(UserForm);

export default RegisterForm;