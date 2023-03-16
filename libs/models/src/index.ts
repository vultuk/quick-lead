import { Prisma as PrismaBase, PrismaClient } from './lib';
export * from './lib';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const basePrisma = globalForPrisma.prisma || new PrismaClient();

if (process.env['NODE_ENV'] !== 'production')
  globalForPrisma.prisma = basePrisma;

export const Prisma = PrismaBase;
export const PrismaModels = basePrisma;