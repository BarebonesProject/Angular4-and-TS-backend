import { config } from './Config'
import * as express from 'express'
import * as path from 'path'

const app = express();

app.use(express.static('./frontend'));

app.all(/.*/, (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '..', 'frontend')
    });
})

app.listen(config.port, () => {
    console.log('Server listening on port ' + config.port + '.');
});
