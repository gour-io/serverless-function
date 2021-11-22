require('dotenv').config()
const Airtable = require('airtable-node')

const data = []

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products')

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 400,
          body: `No product with the id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server error: ${error}`,
      }
    }
    return {
      statusCode: 200,
      body: 'Single Product',
    }
  }
  return {
    statusCode: 400,
    body: 'Please provie product id',
  }
}
