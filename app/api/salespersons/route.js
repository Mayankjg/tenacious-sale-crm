// let salespersons = [];

// export async function GET() {
//   return Response.json(salespersons);
// }

// export async function POST(req) {
//   const body = await req.json();
//   const newSalesperson = { id: Date.now(), ...body };
//   salespersons.push(newSalesperson);
//   return Response.json({ success: true, data: newSalesperson });
// }

let salespersons = [];

export async function GET() {
  return new Response(JSON.stringify(salespersons), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const newSalesperson = { id: Date.now(), ...body };
    salespersons.push(newSalesperson);

    return new Response(JSON.stringify({ success: true, data: newSalesperson }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
