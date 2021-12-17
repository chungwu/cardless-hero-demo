// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoffeeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoffeeIcon(props: CoffeeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.358 3.4h4.884c.718 0 1.318 0 1.794.064.502.067.955.216 1.32.58.364.365.512.818.58 1.32.047.347.06.76.063 1.236.248 0 .45.006.63.042a2.2 2.2 0 011.729 1.729c.042.214.042.456.042.77v.118c0 .314 0 .556-.042.77a2.2 2.2 0 01-1.729 1.729c-.189.037-.4.042-.662.042-.01.172-.022.335-.037.49-.073.71-.224 1.303-.57 1.821a3.8 3.8 0 01-1.049 1.049c-.518.346-1.111.497-1.821.57-.694.07-1.561.07-2.657.07h-.066c-1.096 0-1.964 0-2.657-.07-.71-.073-1.303-.224-1.821-.57a3.8 3.8 0 01-1.049-1.05c-.346-.518-.497-1.111-.57-1.821-.07-.693-.07-1.561-.07-2.657V7.158c0-.718 0-1.318.064-1.794.067-.502.216-.955.58-1.32.365-.364.818-.513 1.32-.58C5.04 3.4 5.64 3.4 6.358 3.4zm8.64 7.2c.244-.002.33-.006.397-.02a1 1 0 00.786-.785c.016-.082.019-.195.019-.595 0-.4-.003-.513-.02-.595a1 1 0 00-.785-.786A2.285 2.285 0 0015 7.8v1.833c0 .344 0 .666-.002.967z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoffeeIcon;
/* prettier-ignore-end */
