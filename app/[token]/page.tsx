import { verifyUnlockPassword } from "../actions";
import UnlockHandler from "./UnlockHandler";

export default async function TokenPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const valid = await verifyUnlockPassword(token);
  return <UnlockHandler valid={valid} />;
}
