import {ReactNode} from "react";
import Header from "../components/Header.tsx";

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      <article className="p-4">{children}</article>
    </main>
  )

}