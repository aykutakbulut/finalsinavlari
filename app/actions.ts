"use server";

export async function verifyUnlockPassword(password: string): Promise<boolean> {
  const expected = process.env.UNLOCK_PASSWORD;
  if (!expected) return false;
  return password === expected;
}
