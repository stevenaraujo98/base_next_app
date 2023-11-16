"use client";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children, session, lang, messages }) => {
	return (
		// Language
		<NextIntlClientProvider locale={lang} messages={messages}>
			{/* Theme and Style */}
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{/* Redux */}
				<Provider store={store}>
					{/* Session */}
					<SessionProvider session={session}>{children}</SessionProvider>
				</Provider>
			</ThemeProvider>
		</NextIntlClientProvider>
	);
};

export default Providers;

/*
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}
*/
