import {ReactNode} from "react"
import Header from "../components/Header.tsx"
import PageLayout from "../components/PageLayout.tsx"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      <article className="p-4">
        <PageLayout>
          {children}
        </PageLayout>
      </article>
    </main>
  )

}