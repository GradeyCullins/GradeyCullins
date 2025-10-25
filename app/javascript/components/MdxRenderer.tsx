import {useMemo} from "react";
import {compileSync, runSync} from "@mdx-js/mdx";
import {MDXProvider} from "@mdx-js/react";
import type {MDXComponents} from "mdx/types";
import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {jsxDEV} from "react/jsx-dev-runtime";

type MdxRendererProps = {
  code: string
  components?: MDXComponents
}

export default function MdxRenderer({ code, components }: MdxRendererProps) {
  const componentOverrides = useMemo(() => components ?? {}, [components]);

  const Content = useMemo(() => {
    const compiled = compileSync(code, {
      outputFormat: "function-body",
      providerImportSource: "@mdx-js/react",
      development: import.meta.env.DEV
    });

    return runSync(compiled, {
      Fragment,
      jsx,
      jsxs,
      jsxDEV,
      useMDXComponents: () => componentOverrides
    }).default;
  }, [code, componentOverrides]);

  return (
    <MDXProvider components={componentOverrides}>
      <Content components={componentOverrides} />
    </MDXProvider>
  );
}
