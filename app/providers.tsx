"use client";

import { ThemeProvider } from "./context/theme";

type ProvidersProps = React.PropsWithChildren;

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
