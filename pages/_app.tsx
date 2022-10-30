import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Box } from "../components/Box";
import Navbar from '../components/NavbarComponent';

// Providers (providing Supabase to our application, nextui providers)
// Navbar

// Navbar
// Box (container for the content)

function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  // Supabase URL? Supabase Anon key? CREATE A SUPABASE ACCOUNT

  return  (
    <SessionContextProvider
      supabaseClient={supabaseClient}
    >
      <NextUIProvider>
        <Navbar />
        <Box css={{ px: "$12", py: "$15", mt: "$12", "@xsMax": {px: "$10"}, maxWidth: "800px", margin: "0 auto" }}>
          <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </SessionContextProvider>
  )
}

export default MyApp
