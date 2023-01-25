const express = require('express');
const app = express();

const env = require('./config/env');

//routers
const userRouter = require('./routers/user');

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(env.port, () => {
	console.log(`maisoft v2 running on port: ${env.port}`);
});
