
import { Injectable } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client.js';
import "dotenv/config";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    console.log(process.env.DATABASE_HOST)
    const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  allowPublicKeyRetrieval: true,
  // connectionLimit: 5,
});
    super({ adapter });
  }
}
