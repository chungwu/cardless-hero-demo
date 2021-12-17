// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type ScreenValue =
  | "laptop"
  | "laptopSmall"
  | "tablet"
  | "mobile"
  | "tabletSmall";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */
export function ScreenVariantProvider(props: React.PropsWithChildren) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(true, {
  laptop: "(max-width:1280px)",
  laptopSmall: "(max-width:960px)",
  tablet: "(max-width:800px)",
  mobile: "(max-width:414px)",
  tabletSmall: "(max-width:520px)",
});

export default ScreenContext;
/* prettier-ignore-end */
