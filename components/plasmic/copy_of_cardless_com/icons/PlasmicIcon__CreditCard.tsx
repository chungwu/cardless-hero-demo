// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCardIcon(props: CreditCardIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M7.945 3.25h8.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.601.602.86 1.36.981 2.26.049.36.077.762.094 1.206a.749.749 0 01.01.327c.013.541.013 1.142.013 1.804v4.11c0 1.367 0 2.47-.117 3.337-.12.9-.38 1.658-.981 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-8.11c-1.368 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.982-2.26-.116-.867-.116-1.97-.116-3.337v-4.11c0-.662 0-1.263.013-1.804a.754.754 0 01.01-.327c.017-.444.045-.845.093-1.206.121-.9.38-1.658.982-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zm13.202 3.558c.018.139.034.286.046.442H2.807c.012-.156.027-.303.046-.442.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.19-.103h8c1.436 0 2.437.002 3.193.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4zM5.25 12a.75.75 0 01.75-.75h4a.75.75 0 110 1.5H6a.75.75 0 01-.75-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreditCardIcon;
/* prettier-ignore-end */
