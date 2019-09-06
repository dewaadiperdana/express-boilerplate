import 'module-alias/register';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

// APP ROUTER
import indexRoutes from '@routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ROUTES SETUP
app.use('/', indexRoutes);

app.listen(port, () => console.log(`Server running at port: ${port}`));