import {ReactNode} from "react";

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-8 mx-auto max-w-[1200px] pl-4">
      {children}
    </div>
  )
}