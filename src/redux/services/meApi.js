import { getTokenFromCookie } from "@/utils/cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const pathHost = process.env.NEXT_AUTH_HOST;
console.log(pathHost, "http://localhost:4000/auth/");

export const meApi = createApi({
	reducerPath: "meApi",
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/auth/",
		prepareHeaders: headers => {
			// const token = getTokenFromCookie();
			const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ7XCJpZFwiOjMsXCJjcmVhdGVkQXRcIjpcIjIwMjMtMDgtMjNUMjM6MjM6MDkuODI2WlwiLFwidXBkYXRlZEF0XCI6XCIyMDIzLTA4LTIzVDIzOjIzOjA5LjgyNlpcIixcIm5hbWVcIjpcIkFETUlOSVNUUkFUT1JcIixcImlzQWRtaW5cIjp0cnVlLFwiaXNMYXd5ZXJcIjpmYWxzZX0iLCJpYXQiOjE2OTM0NjEzNTgsImV4cCI6MTY5NjA1MzM1OH0.1tHL-6CeN13KDXoOFHW5lugYuie22b5u9rPKHF15OcI";
			console.log(token, "token");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: builder => ({
		getMe: builder.query({
			query: () => "me",
		}),
	}),
});

export const { useGetMeQuery } = meApi;
