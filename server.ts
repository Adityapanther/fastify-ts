import fastify from "fastify";
import fastifyEnv from "fastify-env";
import indexRouter from "./routers";
const server = fastify();

const envOpts = {
    confKey: "config",
    dotenv: true,
    schema: {
        type: "object",
        properties: {
            PORT: {
                type: "number",
                default: 3000
            }
        }
    }
}

async function launch(){
    await server.register(fastifyEnv, envOpts);

    await server.register(indexRouter);
    server.listen(server.config.PORT, (err, address) => {
       if(!err){
        console.log("server listenning on " + address);
       }else throw Error("server not running");
    })
}

launch();