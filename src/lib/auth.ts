// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const client = new MongoClient(process.env.MONGODB_URL as string) ;
// const db = client.db("bazar-dor-7");

// export const auth = betterAuth({
//      emailAndPassword: { 
//     enabled: true, 
//   }, 
//   socialProviders:{
//     google:{
//          clientId:process.env.GOGGLE_CLIENT_ID as string,
//          clientSecret:process.env.GOGGLE_CLIENT_SECRET as string
//     },
//     github:{
//       clientId:process.env.GITHUB_CLIENT_ID as string,
//          clientSecret:process.env.GITHUB_CLIENT_SECRET as string
//     }
//   },
//   database: mongodbAdapter(db, {
//     client,
//   }),
// });


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL!);
const db = client.db("bazar-dor-7");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,

    trustedOrigins: [
        "https://bazar-dor-7.vercel.app",
        "http://localhost:3000",
    ],

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOGGLE_CLIENT_ID!,
            clientSecret: process.env.GOGGLE_CLIENT_SECRET!,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },

    database: mongodbAdapter(db, {
        client,
    }),
});
