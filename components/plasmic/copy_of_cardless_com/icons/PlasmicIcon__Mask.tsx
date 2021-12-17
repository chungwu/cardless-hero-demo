// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 235 507"}
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
          "M0 252.984L.001 41.357c0-5.296-.053-10.596.602-15.866.822-6.616 3.08-12.588 7.97-17.353C12.78 4.036 17.923 1.87 23.63.896c2.916-.5 5.858-.725 8.82-.775A569.306 569.306 0 0150.177.085c2.319.033 3.75 1.636 3.848 3.651.08 1.672.123 3.35.477 5.018 1.14 5.382 5.752 9.672 11.436 10.238a50.84 50.84 0 005.054.24c30.942.002 61.883 0 92.825-.002 2.351 0 4.697-.03 6.993-.649 5.64-1.518 9.374-6.498 9.654-12.333.051-1.082.097-2.17.259-3.238.246-1.618 1.395-2.67 3.015-2.854a18.3 18.3 0 011.986-.123c6.393-.017 12.79-.128 19.176.184 5.083.248 10.084 1.051 14.691 3.37 7.492 3.77 11.891 9.927 13.746 18.01.935 4.073 1.127 8.218 1.22 12.37.059 2.587.062 5.176.062 7.764.006 141.387.008 282.773.009 424.16 0 4.935.01 9.873-.603 14.782-.828 6.616-3.087 12.59-7.975 17.352-3.92 3.819-8.685 5.987-13.997 7.036-4.573.906-9.216 1.073-13.861 1.08-14.295.02-28.59.014-42.884.014-38.783.001-77.565-.001-116.348.003-4.766 0-9.532-.046-14.26-.727-7.358-1.061-13.734-3.97-18.41-9.973-2.875-3.691-4.498-7.922-5.325-12.482-.95-5.239-.947-10.541-.95-15.836-.014-28.952-.008-57.903-.008-86.855V252.984H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
