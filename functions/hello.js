//domain/.netlify/functions/hello

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Example',
  }
}

// exports.handler = (event, context, callback) => {
//     callback(null, {
//         statusCode: 200,
//         body: "Hello world"
//     })
// }
