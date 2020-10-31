import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validadationErrors: Errors = {};
  
  err.inner.forEach((error) => {
    validadationErrors[error.path] = error.message;
  });

  return validadationErrors;
}