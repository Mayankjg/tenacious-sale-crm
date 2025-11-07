// let salespersons = []; 

// export async function GET() {
//   return Response.json(salespersons);
// }

// export async function POST(req) {
//   try {
//     const newSalesperson = await req.json();
//     newSalesperson.id = Date.now().toString(); 
//     salespersons.push(newSalesperson);

//     return Response.json({
//       success: true,
//       message: "Salesperson added successfully",
//       data: newSalesperson,
//     });
//   } catch (error) {
//     return Response.json({ success: false, error: "Invalid data" }, { status: 400 });
//   }
// }

// export async function DELETE(req) {
//   try {
//     const { id } = await req.json();

//     const index = salespersons.findIndex((sp) => sp.id === id);
//     if (index === -1) {
//       return Response.json({ success: false, message: "Salesperson not found" }, { status: 404 });
//     }

//     salespersons.splice(index, 1);
//     return Response.json({ success: true, message: "Salesperson deleted successfully" });
//   } catch (error) {
//     return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
//   }
// }

// export async function PUT(req) {
//   try {
//     const { id, password } = await req.json();

//     if (!id || !password) {
//       return Response.json(
//         { success: false, message: "ID and password are required" },
//         { status: 400 }
//       );
//     }

//     const salesperson = salespersons.find((sp) => sp.id === id);
//     if (!salesperson) {
//       return Response.json({ success: false, message: "Salesperson not found" }, { status: 404 });
//     }

//     salesperson.password = password;
//     return Response.json({ success: true, message: "Password updated successfully" });
//   } catch (error) {
//     return Response.json({ success: false, error: "Error updating password" }, { status: 500 });
//   }
// }




// ✅ app/api/salespersons/route.js
import { salespersons } from "./data.js";

export async function GET() {
  return Response.json(salespersons);
}

export async function POST(req) {
  const newSalesperson = await req.json();
  newSalesperson.id = Date.now().toString();
  salespersons.push(newSalesperson);
  return Response.json(newSalesperson);
}


