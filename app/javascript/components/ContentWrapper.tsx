import {ComponentType, ReactNode} from "react";

type PageLayoutProps = {
  children: ReactNode
}

export default function ContentWrapper({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto max-w-[1200px] pl-4">
      {children}
    </div>
  )
}

export function WithDefaultWrapper(Component: ComponentType<any>) {
  const WrappedComponent = (props: any) => {
    return (
      <ContentWrapper>
        <Component {...props} />
      </ContentWrapper>
    )
  }
  
  WrappedComponent.displayName = `WithDefaultWrapper(${Component.displayName || Component.name || 'Component'})`
  
  return WrappedComponent
}