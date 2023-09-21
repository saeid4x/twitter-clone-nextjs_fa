import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = client
}
export default client


// this code prevent below Error:
/***  
 * 
 *  warn(prisma-client) Already 10 Prisma Client are actively running 
 */