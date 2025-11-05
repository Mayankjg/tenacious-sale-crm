let salespersons = []; // In-memory storage (resets when server restarts)

// GET all salespersons
export async function GET() {
  return Response.json(salespersons);
}

// ADD new salesperson
export async function POST(req) {
  try {
    const newSalesperson = await req.json();
    newSalesperson.id = Date.now().toString(); // unique id
    salespersons.push(newSalesperson);

    return Response.json({ success: true, salesperson: newSalesperson });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

// For testing: we can export our list so the DELETE route can access it
export { salespersons };
