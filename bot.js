//---------------bot without webhooks--------------

// const Twit = require('twit')
// const config = require('./config')

// const bot = new Twit(config)
// const Twitter = new TwitterPackage(secret);
// bot.get('followers/list', {
//     screen_name: 'MedMarrouchi',
//     count: 5
//   }, (err, data, response) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })
// bot.post('friendships/create', {
//     screen_name: 'nour_borgi'    // my id : 1226891795453415400 , id_str : 1226891795453415426
//   }, (err, data, response) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })
// bot.post('direct_messages/events/new', {
//     event: {
//         type: "message_create",
//         message_create: {
//             target: {
//                 recipient_id: '1226891795453415426'
//             },
//             message_data: {
//                 text: "I m nour haha a hacker "
//             }
//         }
//     }
// }, (error, event) => {
//     if (error) {
//         console.log(error)
//     }
//     else {
//         console.log(event);
//     }
// })

