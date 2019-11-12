import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// APP ROUTER
import indexRoutes from '@routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ROUTES SETUP
app.use('/', indexRoutes);

if (!module.parent) {
  app.listen(port, () =>
    console.log(`Server running at : http://localhost:${port}`)
  );
}

export default app;
