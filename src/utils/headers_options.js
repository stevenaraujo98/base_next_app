// 0 sin login
// 1 si es administador
// 2 si es abogado
// 3 si es cliente
export const options = [
	[
		{
			name: "start",
			path: "/",
		},
		{
			name: "documents",
			path: "/documentos",
		},
		{
			name: "prices",
			path: "/precios",
		},
		{
			name: "about",
			path: "/nosotros",
		},
	],
	[
		{
			name: "users",
			path: "/admin/usuarios",
		},
		{
			name: "dashboard",
			path: "/admin/dashboard",
		},
	],
	[],
	[
		{
			name: "dashboard",
			path: "/client/dashboard",
		},
		{
			name: "history",
			path: "/client/historial",
		},
		{
			name: "requests",
			path: "/client/solicitudes",
		},
	],
];
