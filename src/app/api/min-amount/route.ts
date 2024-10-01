import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fromCurrency = searchParams.get('from');
  const toCurrency = searchParams.get('to');

  const res = await fetch(
    `https://api.changenow.io/v1/min-amount/${fromCurrency}_${toCurrency}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return Response.json({ data });
}
