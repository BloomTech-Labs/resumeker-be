const request = require("request");


const sub = res.locals.sub;
const token = await getToken();

// var options = {
//     method: 'GET',
//     url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${sub}`,
//     headers: {
//         authorization: token,
//         'content-type': 'application/json'
//     },
//     json: true,
//     jar: 'JAR'
// }

// try {
//     request(options, function (error, response, body) {
//         if(error) {
//             console.log(error)
//             res.status(401).json(error)
//         }

//         res.status(200).json(body)
//     })
// } catch (err) {
//     console.log(err)
//     res.status(400).json(err)
// }

// })
