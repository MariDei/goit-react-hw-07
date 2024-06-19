import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
  number: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
});

const ContactForm = () => {
  const fieldNameId = useId();
  const fieldNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.wrapper}>
        <label className={css.name} htmlFor={fieldNameId}>
          Name
        </label>
        <Field className={css.input} type="text" id={fieldNameId} name="name" />
        <ErrorMessage name="name" component="span" />
        <label className={css.number} htmlFor={fieldNumberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="phone"
          id={fieldNumberId}
          name="number"
        />
        <ErrorMessage name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
