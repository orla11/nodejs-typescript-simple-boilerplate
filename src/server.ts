import { Request, Response, NextFunction } from 'express';
import express from 'express';
import logger from './config/logger';
import config from './config/config';
import sampleRoute from './routes/sample';

const NAMESPACE = 'Server';
const app = express();

app.use(sampleRoute);

// Handling errors
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

app.listen(config.server.port, () => logger.info(`[${NAMESPACE}] - Server is running ${config.server.hostname}:${config.server.port}`));
