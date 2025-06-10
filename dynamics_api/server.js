
// import express from 'express';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';

// dotenv.config();
// const app = express();
// app.use(bodyParser.json());


// const {
//   TENANT_ID,
//   CLIENT_ID,
//   CLIENT_SECRET,
//   DYNAMICS_RESOURCE
// } = process.env;

// const DYNAMICS_API = `${DYNAMICS_RESOURCE}/api/data/v9.2`; // adjust API version if needed

// // Fetch access token
// async function getAccessToken() {
//   const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
//   const params = new URLSearchParams({
//     grant_type: 'client_credentials',
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     scope: `${DYNAMICS_RESOURCE}/.default`
//   });

//   const response = await axios.post(url, params);
//   return response.data.access_token;
// }

// // Example: Get Events from custom entity "events"
// app.get('/api/events', async (req, res) => {
//   try {
//     const token = await getAccessToken();
//     const response = await axios.get(`${DYNAMICS_API}/your_custom_entity_name`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json'
//       }
//     });
//     res.json(response.data.value);
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).send('Failed to fetch events from Dynamics.');
//   }
// });

// app.listen(3001, () => {
//   console.log('Backend listening on http://localhost:3001');
// });
