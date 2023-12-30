import express from 'express';

import userRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1',indexRoutes)
app.use('/api/v1',userRoutes)



app.listen(3000)
console.log('Server on port 3000');