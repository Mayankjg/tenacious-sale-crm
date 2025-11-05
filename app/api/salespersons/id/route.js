import { salespersons } from "../route";

// DELETE salesperson by ID
export async function DELETE(req, { params }) {
  const { id } = params;

  const index = salespersons.findIndex((sp) => sp.id === id);
  if (index === -1) {
    return Response.json({ success: false, message: "Salesperson not found" }, { status: 404 });
  }

  // Remove salesperson
  salespersons.splice(index, 1);

  return Response.json({ success: true, message: "Salesperson deleted successfully" });
}
