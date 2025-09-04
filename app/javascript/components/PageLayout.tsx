import {ReactNode} from "react";

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-8 mx-auto max-w-[calc(420px+55rem)] lg:pr-[470px]">
      {children}
    </div>
  )
}