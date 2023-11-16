import { jwtVerify } from "jose";
const secret = process.env.TOKEN_SECRET; // process.env.TOKEN_SECRET; server side rendering SSR

/*
return 1 if is admin
return 2 if is lawyer
return 3 if is client
*/
export async function validateTypeUser(token) {
	const secretFn = new TextEncoder().encode(secret);
	const testJose = await jwtVerify(token, secretFn, { algorithms: ["HS256"] });
	const verify = testJose.payload;
	const role = JSON.parse(verify.role);

	return role.isAdmin ? 1 : role.isLawyer ? 2 : 3;
}
