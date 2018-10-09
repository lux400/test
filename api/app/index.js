import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Bluebird from 'bluebird';
import http from 'http';
import cors from 'cors';

import config from './config';
import router from './routes';

global.Promise = Bluebird;

const app = express();

const { host, port } = config;

const server = http.Server(app);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/api', router);

server.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
