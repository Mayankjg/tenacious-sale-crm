let salespersons = []; // Temporary in-memory storage

export async function GET() {
  return Response.json(salespersons);
}

export async function POST(req) {
  const newSalesperson = await req.json();
  newSalesperson.id = salespersons.length + 1;
  salespersons.push(newSalesperson);
  return Response.json({ success: true, message: "Salesperson added", data: newSalesperson });
}
