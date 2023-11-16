"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next-intl/client";
import { useState } from "react";

function useLanguageStorage(itemName, initialValue) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	let parsedItem = initialValue;
	if (typeof window !== "undefined") {
		const localStorageItem = localStorage.getItem(itemName);
		if (!localStorageItem) {
			localStorage.setItem(itemName, initialValue);
			parsedItem = initialValue;
		} else {
			// locales.includes(pathname.slice(1, 3)
			console.log("localStorageItem", localStorageItem, "initialValue", initialValue, "pathname", pathname);
			if (localStorageItem === "es" && initialValue === "en") {
				router.push(
					"/" + pathname.slice(4) + (new URLSearchParams(searchParams).size > 0 ? "?" + searchParams : ""),
				);
			} else if (localStorageItem === "en" && initialValue === "es") {
				router.push(
					"/en" +
						(pathname.slice(1, 3) === "es" ? "/" + pathname.slice(4) : pathname) +
						(new URLSearchParams(searchParams).size > 0 ? "?" + searchParams : ""),
				);
			}
			parsedItem = localStorageItem;
		}
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = newItem => {
		localStorage.setItem(itemName, newItem);
		setItem(newItem);
	};

	return [item, saveItem];
}

export default useLanguageStorage;
