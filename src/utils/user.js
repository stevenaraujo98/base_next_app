import jwt from "jsonwebtoken";
const secret = process.env.TOKEN_SECRET; // process.env.TOKEN_SECRET; server side rendering SSR

/*
return 1 if is admin
return 2 if is lawyer
return 3 if is client
*/
export function validateTypeUser(token) {
	// console.log("token", token, secret, process.env.NEXT_AUTH_HOST);
	const verify = jwt.decode(token, secret, true);
	const role = JSON.parse(verify.role);
	// console.log("role", role.id, role.isAdmin, role.isLawyer);
	return role.isAdmin ? 1 : role.isLawyer ? 2 : 3;
}
