export function verifyLangPath(pathname, lang) {
	const locale = pathname.substring(1, 3);

	if (lang === locale) {
		const newPathname = pathname.substring(3);
		return newPathname;
	}

	return pathname;
}
