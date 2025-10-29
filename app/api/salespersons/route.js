let salespersons = [];

export async function GET() {
  return Response.json(salespersons);
}

export async function POST(req) {
  const body = await req.json();
  const newSalesperson = { id: Date.now(), ...body };
  salespersons.push(newSalesperson);
  return Response.json({ success: true, data: newSalesperson });
}
