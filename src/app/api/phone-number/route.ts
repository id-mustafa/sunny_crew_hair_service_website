/* eslint-disable @typescript-eslint/no-unused-vars */
// /app/api/phone-number/route.js
export async function GET(_req: never) {
  return new Response(
    JSON.stringify({ phone: ['+1', '443', '845', '0744'].join('') }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
