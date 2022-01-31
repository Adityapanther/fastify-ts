"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_env_1 = __importDefault(require("fastify-env"));
const routers_1 = __importDefault(require("./routers"));
const server = (0, fastify_1.default)();
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
};
function launch() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.register(fastify_env_1.default, envOpts);
        yield server.register(routers_1.default);
        server.listen(server.config.PORT, (err, address) => {
            if (!err) {
                console.log("server listenning on " + address);
            }
            else
                throw Error("server not running");
        });
    });
}
launch();
