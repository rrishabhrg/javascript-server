import { validationResult, checkSchema } from 'express-validator/check';

const validator = (schema): any => {

  return [
    checkSchema(schema), (req, res, next) => {
      const result = validationResult(req);
      console.log('Error --->', result.array());
      if (!result.isEmpty()) {
        next({
          error: 'Data is not valid',
          message: 'Data must be in proper format',
          status: '403'
        });
      }
      next();
    }
  ]
}

export default validator;
