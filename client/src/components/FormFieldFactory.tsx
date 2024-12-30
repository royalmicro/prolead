// components/FormFieldFactory.tsx

import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface Option {
  value: string;
  label: string;
}

interface FormFieldFactoryProps {
  label?: string;
  name: string;
  type?: string;
  as?: 'input' | 'textarea' | 'select';
  placeholder?: string;
  options?: Option[];
  className?: string;
}

const FormFieldFactory: React.FC<FormFieldFactoryProps> = ({
  label,
  name,
  type = 'text',
  as = 'input',
  placeholder = '',
  options = [],
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className} w-full `}>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-medium text-primary-light mb-1'
        >
          {label}
        </label>
      )}

      {as === 'select' ? (
        <Field
          as='select'
          name={name}
          id={name}
          className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300'
        >
          <option
            value=''
            disabled
          >
            {placeholder || 'Select an option'}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          as={as}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className='bg-purple-100 w-full border text-gray-500 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300'
        />
      )}

      <ErrorMessage
        name={name}
        component='div'
        className='text-sm text-red-600 mt-1'
      />
    </div>
  );
};

export default FormFieldFactory;
