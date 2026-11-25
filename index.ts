import Hapi from '@hapi/hapi';

// The platform passes the port in the PORT variable; 3000 by default
const port = Number(process.env.PORT) || 3000;

const init = async () => {
    const server = Hapi.server({
        port,
        host: '0.0.0.0',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => 'Hello world',
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
