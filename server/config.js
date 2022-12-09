import path from 'path';
import dotenv from 'dotenv';
import 'babel-polyfill';

dotenv.config({
  path: path.join(__dirname, './../.env'),
});

