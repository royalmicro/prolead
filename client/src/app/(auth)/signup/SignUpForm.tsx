'use client';

import { useAuthStore } from '@/store/auth';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormFieldFactory from '@/components/FormFieldFactory';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import BasicButton from '@/components/BasicButton';
import CardWrapper from '@/components/CardWrapper';

const SignupForm = () => {
  const { signup, loading, error, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/login');
    }
  }, [user, router]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    const { name, email, password } = values;
    await signup(email, password, name);
  };

  return (
    <CardWrapper title={'Sign Up'}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col items-center'>
              <FormFieldFactory
                label='Name'
                name='name'
                placeholder='Enter your name'
                className='mb-4'
              />
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
                className='w-2/4'
                isLoading={isSubmitting || loading}
                disabled={isSubmitting || loading}
              >
                Sign Up
              </BasicButton>
            </Form>
          )}
        </Formik>
    </CardWrapper>
  );
};

export default SignupForm;
