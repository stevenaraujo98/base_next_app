"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useGetMeQuery } from "@/redux/services/meApi";
// import { useGetUsersQuery } from "@/redux/services/userApi";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
	const { status, data: session } = useSession();
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();
	// const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
	const { isLoading, isFetching, data, error } = useGetMeQuery();

	useEffect(() => {
		if (status === "authenticated") {
			const token = session.user;

			// console.log(token);
		}
	}, [status, session]);

	return (
		<div>
			solicitudes
			<div>
				<div>
					<button aria-label="Increment value" onClick={() => dispatch(increment())}>
						Increment
					</button>
					<span>{count}</span>
					<button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
						Decrement
					</button>
				</div>
			</div>
			<div>
				{error ? (
					<p>Oh no, there was an error</p>
				) : isLoading || isFetching ? (
					<p>Loading...</p>
				) : data ? (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr",
							gap: 20,
						}}
					>
						{data.email}
						<br />
						{data.roleId}
						{/* {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))} */}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Page;
