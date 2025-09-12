import {ComponentType, ReactNode} from "react";

type PageLayoutProps = {
  children: ReactNode
  className?: string
}

export default function ContentWrapper({ children, className }: PageLayoutProps) {
  return (
    <div className={`mx-auto max-w-[1200px] pl-4 ${className}`}>
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