import jwt from "jsonwebtoken";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const pathHost = process.env.NEXT_AUTH_HOST;

// app/api
// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "correo@correo.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         // credentials tiene los datos y csrfToken
//         const res = await fetch(pathHost + "/auth/signin", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: credentials?.email,
//             password: credentials?.password,
//           }),
//         });

//         const resp = await res.json();
//         if (resp) {
//           // Any object returned will be saved in `user` property of the JWT
//           return resp;
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null;
//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, session }) {
//       //  user es la respuesta del api
//       // token = la primera es el form y la segunda es otra cosa con el user que es la respuesta del endpoint
//       return { ...token, ...user, ...session };
//     },

//     async session({ session, token }) {
//       if (token) {
//         session.redirectTo = "/solicitudes";
//       }
//       session.user = token;
//       // token es el mismo
//       // session => user: token  y expires: fecha
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signIn",
//   },
// });

// export { handler as GET, handler as POST };

// NEXT12
export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "correo@correo.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { email, password } = credentials;

				const res = await fetch(pathHost + "/auth/signin", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						password,
					}),
				});

				// user = response del endpoint
				const user = await res.json();
				// console.log("----------------- user", user);
				// { accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5MTk5MjI3OCwiZXhwIjoxNjk0NTg0Mjc4fQ._9tJtgiJdZzdplzziT43nzifzIUs4a8JeiGtGpoXwwo' }

				if (res.ok && user) {
					return user;
				} else return null;
			},
		}),
	],
	secret: process.env.TOKEN_SECRET,
	jwt: {
		secret: process.env.TOKEN_SECRET,
		encode: async data => {
			const { secret, token, maxAge } = data;
			// console.log("ENCODE", token);
			if (typeof token === "string") {
				return token;
			}
			// const jwtClaims = {
			//   sub: token.sub,
			// };

			// const encodedToken = jwt.sign(jwtClaims, secret, {
			//   expiresIn: "30d",
			//   algorithm: "HS256",
			// });
			// console.log("encodedToken", encodedToken);
			return encodedToken;
		},
		async decode(data) {
			const { secret, token, maxAge } = data;
			// console.log("DECODE", data);
			const verify = jwt.verify(token, secret);
			// console.log("verify", verify);
			// verificar si el token es valido, tiempo de vida
			return token;
		},
	},
	session: { strategy: "jwt" },
	callbacks: {
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			// session es un object con variabels undefined
			// token es la respuesta de token de jwt
			// user es  undefined
			// console.log("SESSION");
			// console.log(token, user, session);
			if (typeof user !== "undefined") {
				session.user = user;
			} else {
				session.user = token;
			}
			// console.log("session", session);
			return session;
		},
		async jwt({ token, user }) {
			// const secret = process.env.TOKEN_SECRET;
			// Persist the OAuth access_token to the token right after signin
			// user = response del endpoint, la primera vez { accessToken: 'xx' }
			// token = despues de la primera vez que se loguea se guarda el accesstoken con la info del user y esto geneera una respuesta con el accesstoken del user
			// console.log("JWT", token, user);

			// sub asi lo envia marcos
			if (!token?.sub) {
				// console.log("ENTRa");
				// console.log(user.accessToken);
				// console.log(secret);
				// const verify = jwt.verify(user.accessToken, secret);
				// console.log("verify", verify);
				// token.id = verify.sub;
				return user.accessToken;
			}
			return token;
		},
	},
	pages: {
		signIn: "/auth/signIn",
	},
};

export default NextAuth(authOptions);
