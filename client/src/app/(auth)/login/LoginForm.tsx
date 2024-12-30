'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '@/store/auth';
import FormFieldFactory from '@/components/FormFieldFactory';
import BasicButton from '@/components/BasicButton';
import CardWrapper from '@/components/CardWrapper';

const LoginForm = () => {
  const { login, loading, error } = useAuthStore();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    const { email, password } = values;
    await login(email, password);
  };

  return (
    <CardWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormFieldFactory
              label='Email'
              name='email'
              type='email'
              placeholder='Enter your email'
              className='mb-4'
            />
            <FormFieldFactory
              label='Password'
              name='password'
              type='password'
              placeholder='Enter your password'
              className='mb-4'
            />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <BasicButton
              type='submit'
              className='w-full'
              isLoading={isSubmitting || loading}
              disabled={isSubmitting || loading}
            >
              Login
            </BasicButton>
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default LoginForm;
