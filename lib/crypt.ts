import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

export function createHash(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateVerificationToken(email: string) {
  const token = randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 24 * 3600 * 1000);

  return {
    identifier: email,
    token: token,
    expires: expires
  };
}