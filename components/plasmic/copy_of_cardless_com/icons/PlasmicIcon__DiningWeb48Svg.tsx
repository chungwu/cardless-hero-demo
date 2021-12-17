// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiningWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiningWeb48SvgIcon(props: DiningWeb48SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"48"} height={"48"} rx={"8"} fill={"#FAFAFA"}></rect>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.619 12.881a.875.875 0 10-1.238 1.238l3.017 3.017c.872.871 1.084 1.114 1.177 1.395.094.28.07.601-.105 1.822l-.005.04-5.763-5.762a.875.875 0 00-1.238 1.238l5.763 5.762-.04.006c-1.221.174-1.543.198-1.823.105-.28-.094-.524-.306-1.395-1.177l-3.017-3.017a.875.875 0 00-1.238 1.237l3.017 3.017.12.12c.69.692 1.236 1.24 1.96 1.48.722.241 1.488.13 2.454-.008l.168-.024 1.34-.192.823.822-1.715 1.715-7 7a.875.875 0 001.238 1.237l7-7 1.714-1.715 5.215 5.215 3.5 3.5a.875.875 0 101.237-1.237l-3.5-3.5-5.832-5.833h-.001v-.002l-1.44-1.44.19-1.34.025-.168c.14-.966.25-1.732.008-2.455-.24-.723-.788-1.27-1.479-1.959l-.12-.12-3.017-3.017zm16.333 0a.875.875 0 00-1.237 0l-8.167 8.167a.875.875 0 001.237 1.237l7.548-7.547c.57.573.974.996 1.255 1.364.33.432.404.683.404.898 0 .215-.075.466-.404.898-.345.452-.878.988-1.673 1.783l-4.867 4.867a.875.875 0 001.237 1.237l4.867-4.866.043-.043c.741-.742 1.36-1.36 1.784-1.916.448-.588.763-1.209.763-1.96 0-.752-.315-1.372-.763-1.96-.425-.556-1.043-1.174-1.784-1.916l-.043-.043-.2-.2z"
        }
        fill={"#F00303"}
      ></path>
    </svg>
  );
}

export default DiningWeb48SvgIcon;
/* prettier-ignore-end */
