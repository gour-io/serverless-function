// const items = [{ name: 'Deepak' }, { name: 'Anna' }]

const items = require('../assets/data')

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
