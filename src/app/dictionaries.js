import { i18n } from "@/i18n/i18n.config";
import "server-only";

const dictionaries = {
	en: () => import("../i18n/languages/en.json").then(module => module.default),
	es: () => import("../i18n/languages/es.json").then(module => module.default),
};

export const getDictionary = async locale => {
	if (i18n.locales.includes(locale)) {
		return await dictionaries[locale]();
	}
	return await dictionaries[i18n.defaultLocale]();
};
