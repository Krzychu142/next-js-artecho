import { PrismaClient } from "@prisma/client/extension";
import { generateVerificationToken } from "./crypt";
import prisma from "./prisma";

export async function createVerificationToken(email: string, prisma?: PrismaClient) {
  const { identifier, token, expires } = generateVerificationToken(email);

  return await prisma.verificationToken.create({
      data: {
        identifier,
        token,
        expires
      }})
}

export async function getVerificationToken(identifier: string, token: string, prisma?: PrismaClient) {
    return await prisma.verificationToken.findUnique({
      where: {
        identifier,
        token
      }
    })
}