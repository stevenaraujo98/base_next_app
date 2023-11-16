"use client";
import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
	let parsedItem = initialValue;
	if (typeof window !== "undefined") {
		const localStorageItem = localStorage.getItem(itemName);
		if (!localStorageItem) {
			localStorage.setItem(itemName, initialValue);
			parsedItem = initialValue;
		} else {
			// try {
			// 	parsedItem = JSON.parse(localStorageItem);
			// } catch (error) {
			// 	console.log("Error parsing JSON:", error, localStorageItem);
			// } finally {
			// 	parsedItem = localStorageItem;
			// }
			parsedItem = localStorageItem;
		}
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = newItem => {
		// const stringifiedItem = JSON.stringify(newItem);
		// localStorage.setItem(itemName, stringifiedItem);
		localStorage.setItem(itemName, newItem);
		setItem(newItem);
	};

	return [item, saveItem];
}

export default useLocalStorage;
