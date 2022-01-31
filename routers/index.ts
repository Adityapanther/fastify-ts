interface IHeaders {
    "content-type": String
}

async function indexRouter(fastify: any, opt: any){
    await fastify.get<{
        Headers: IHeaders
    }>('/', async(req: any, res: any) => {
        return {
        status: "success",
        statusCode: 200,
        msg: "request completed successfuly"
    }
    })
}


export default indexRouter;