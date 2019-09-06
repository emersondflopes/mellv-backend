import "@babel/polyfill";
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cors());

import bookRoutes from './controllers/bookController';

app.use('/api', bookRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('magic happens on port ' + port));














// app.use('/auth', auth);
// app.use('/projects', authMiddleware, routes);
// app.use('/api', authMiddleware, apiRoutes);


// import 'dotenv/config';

// const userCredentials = { firstname: 'Robin' };
// const userDetails = { nationality: 'German' };

// const user = {
//   ...userCredentials,
//   ...userDetails,
// };

// console.log(user);

// console.log(process.env.SOME_ENV_VARIABLE);