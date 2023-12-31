"use client";
import { options } from "@/utils/headers_options";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SigninButton } from "./SigninButton";
import { getSession, useSession } from "next-auth/react";
import { validateTypeUser } from "@/utils/user";
import { useEffect, useState } from "react";
import useLanguageStorage from "@/hook/useLanguageStorage";
import { ComboBox } from "./ComboBox";
import { i18n } from "@/i18n/i18n.config";
import DarkModeButton from "./DarkModel";
import { ThemeSwitcher } from "./ThemeSwitcher";
// import { useTranslations } from "next-intl";

const Header = props => {
	const { lang, dict } = props;
	// const t = useTranslations("Index");
	const [typeUser, setTypeUser] = useState(0);
	const pathname = usePathname();
	const { status, data: session } = useSession();
	const [language, setLanguage] = useLanguageStorage("Lang", lang);

	useEffect(() => {
		const fecthNodes = async () => {
			if (status === "authenticated") {
				const token = session.user;
				const roleResult = await validateTypeUser(token);
				setTypeUser(roleResult);
			}
		};
		fecthNodes();
	}, [status, session]);

	return (
		<div className="min-h-full">
			<nav className="bg-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-start justify-start">
							{/* Imagen */}
							<Link href={options[typeUser][0].path}>
								<div className="flex-shrink-0">
									<Image
										className="h-9 w-9"
										src="/logo-white.svg"
										alt="Legal Advice"
										width={100}
										height={100}
										priority
									/>
								</div>
							</Link>
							{/* Opciones */}
							{status === "loading" ? null : (
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
										{options[typeUser].map((item, index) => (
											<Link
												key={index}
												href={lang === "en" ? "/" + lang + item.path : item.path}
												className={
													pathname === item.path
														? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
														: `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`
												}
											>
												{/* {t(item.name)} */}
												{dict.Index[item.name]}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								{/* <ThemeSwitcher /> */}
								<DarkModeButton />
								<ComboBox
									className="text-sm mr-2 font-bold text-white bg-transparent p-1.5 rounded-md hover:cursor-pointer "
									title={language}
									onSelect={setLanguage}
									options={i18n.options}
									classOptions="text-black font-bold py-5"
								/>
								<SigninButton />

								{false && (
									<>
										<button
											type="button"
											className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<span className="sr-only">View notifications</span>
											<svg
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
												/>
											</svg>
										</button>
										{/* Profile dropdown */}
										<div className="relative ml-3">
											<div>
												<button
													type="button"
													className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
													id="user-menu-button"
													aria-expanded="false"
													aria-haspopup="true"
												>
													<span className="sr-only">Open user menu</span>
													<img
														className="h-8 w-8 rounded-full"
														src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
														alt=""
													/>
												</button>
											</div>
											{/*
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        */}
											<div
												className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
												role="menu"
												aria-orientation="vertical"
												aria-labelledby="user-menu-button"
												tabIndex={-1}
											>
												{/* Active: "bg-gray-100", Not Active: "" */}
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700"
													role="menuitem"
													tabIndex={-1}
													id="user-menu-item-0"
												>
													Your Profile
												</a>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700"
													role="menuitem"
													tabIndex={-1}
													id="user-menu-item-1"
												>
													Settings
												</a>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700"
													role="menuitem"
													tabIndex={-1}
													id="user-menu-item-2"
												>
													Sign out
												</a>
											</div>
										</div>
									</>
								)}
							</div>
						</div>

						{/* Mobile menu button */}
						<div className="-mr-2 flex md:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{/* Menu open: "hidden", Menu closed: "block" */}
								<svg
									className="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
								{/* Menu open: "block", Menu closed: "hidden" */}
								<svg
									className="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu, show/hide based on menu state. */}
				<div className="md:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
						{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
						<a
							href="#"
							className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</a>
						{options.map((item, index) => (
							<a
								key={index}
								href="#"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div> */}
				</div>
			</nav>
		</div>
	);
};

export default Header;
