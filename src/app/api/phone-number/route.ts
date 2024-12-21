/* eslint-disable @typescript-eslint/no-unused-vars */
// /app/api/phone-number/route.js
export async function GET(_req: never) {
  return new Response(
    JSON.stringify({ phone: ['+1', '919', '401', '6300'].join('') }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
