// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCard2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCard2Icon(props: CreditCard2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M6.745 2.76h6.885c1.16 0 2.097 0 2.833.098.764.103 1.407.323 1.918.834.511.51.731 1.154.834 1.918.041.306.065.647.079 1.024a.636.636 0 01.008.277c.012.46.012.97.012 1.532v3.489c0 1.161 0 2.097-.1 2.833-.102.764-.322 1.407-.833 1.918-.51.512-1.154.731-1.918.834-.736.099-1.672.099-2.833.099H6.745c-1.161 0-2.097 0-2.833-.099-.764-.103-1.407-.322-1.918-.834-.511-.51-.731-1.154-.834-1.918-.099-.736-.099-1.672-.099-2.833V8.443c0-.562 0-1.072.011-1.532a.64.64 0 01.009-.277c.014-.377.038-.718.08-1.024.102-.764.322-1.407.833-1.918.51-.511 1.154-.731 1.918-.834.736-.099 1.672-.099 2.833-.099zm11.208 3.02c.016.118.029.242.04.375H2.382c.01-.133.023-.257.04-.375.083-.623.236-.953.471-1.188s.565-.388 1.188-.472c.641-.086 1.491-.087 2.71-.087h6.791c1.219 0 2.069 0 2.71.087.623.084.953.237 1.188.472s.388.565.472 1.188zM4.457 10.187c0-.351.285-.636.637-.636H8.49a.637.637 0 110 1.273H5.094a.637.637 0 01-.637-.636z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreditCard2Icon;
/* prettier-ignore-end */
