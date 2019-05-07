export default {
  post: {
    id: {
      isLength: {
        options: { min:2 , max: 5}
      },
      in: ['body'],
      errorMessage: 'Id is required or you have entered wrong ID'
    },
    name: {
      in: ['body'],
      errorMessage: 'Name is required or you have entered wrong name'
    }
  },

  delete: {
    id: {
      required: true,
      errorMessage: 'Id is required',
      in: ['params']
    }
  },

  update: {
    id: {
      required: true,
      string: true,
      in:['body']
    },
    dataToUpdate: {
      in: ['body'],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {},
    }
  },

  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ['query'],
      errorMessage: 'Skip is invalid',
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ['query'],
      errorMessage: 'Limit is invalid',
    }
  }
}
