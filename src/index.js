const fastify = require('fastify')({
    logger: true
});
const mongoose = require('mongoose')
const routes = require('./routes/book.route');
const config = require('./conf/config');
const cors = require('fastify-cors');
const helmet = require('fastify-helmet')

const port = 3000 || process.env.port;

fastify.register(cors);
fastify.register(helmet);

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

routes.forEach((route, index) => {
    fastify.route(route)
});

const start = async () => {
    try {
        await fastify.listen(port, '0.0.0.0')
        fastify.log.info(`server listening on ${port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();