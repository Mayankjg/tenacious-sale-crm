// // ✅ app/api/salespersons/[id]/route.js
// import { salespersons } from "../data.js";

// export async function DELETE(req, { params }) {
//   const { id } = params;

//   const index = salespersons.findIndex((sp) => sp.id === id);

//   if (index !== -1) {
//     salespersons.splice(index, 1);
//     return Response.json({ success: true, message: "Deleted successfully" });
//   } else {
//     return new Response(
//       JSON.stringify({ success: false, message: "Salesperson not found" }),
//       {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
