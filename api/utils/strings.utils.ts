import crypto from "crypto";
import bcrypt from "bcrypt";
import { DateTime } from "luxon";

function generateUniqueString(length: number) {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString("hex").slice(0, length);
  const timestamp = DateTime.now().toUnixInteger().toString().substring(6);
  const uniqueString = `${hexString}${timestamp}`;
  return uniqueString;
}

function toLowerCaseSetter(value: string): string {
  return value?.toLowerCase();
}

async function encryptValue(value: string): Promise<string> {
  // try {
    const saltRounds = 10;
    const hashedValue = await bcrypt.hash(value, saltRounds);
    return hashedValue;
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
}
async function compareValues(plainValue: string, hashValue: string) {
  return bcrypt.compare(plainValue, hashValue);
}

export { generateUniqueString, toLowerCaseSetter, encryptValue, compareValues };
