// import dotenv from 'dotenv';
// dotenv.config();

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DB_CONNECTION_STRING);

export const db = drizzle(sql, { schema });