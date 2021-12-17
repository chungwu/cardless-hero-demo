// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: s0OJmmocqt8k
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicNavButton.module.css"; // plasmic-import: s0OJmmocqt8k/css

import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: E7YdTcD7oFygJ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: G6TAXD3Tu3z00/icon

export type PlasmicNavButton__VariantMembers = {
  labelIcon: "labelIcon";
  type: "primary" | "secondary" | "darkMode";
  iconOnly: "iconOnly";
  small: "small";
};

export type PlasmicNavButton__VariantsArgs = {
  labelIcon?: SingleBooleanChoiceArg<"labelIcon">;
  type?: SingleChoiceArg<"primary" | "secondary" | "darkMode">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  small?: SingleBooleanChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicNavButton__VariantsArgs;
export const PlasmicNavButton__VariantProps = new Array<VariantPropType>(
  "labelIcon",
  "type",
  "iconOnly",
  "small"
);

export type PlasmicNavButton__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string | PageHref;
  openInNewTab?: Target;
};

type ArgPropType = keyof PlasmicNavButton__ArgsType;
export const PlasmicNavButton__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "destination",
  "openInNewTab"
);

export type PlasmicNavButton__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavButtonProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string | PageHref;
  openInNewTab?: Target;
  labelIcon?: SingleBooleanChoiceArg<"labelIcon">;
  type?: SingleChoiceArg<"primary" | "secondary" | "darkMode">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

function PlasmicNavButton__RenderFunc(props: {
  variants: PlasmicNavButton__VariantsArgs;
  args: PlasmicNavButton__ArgsType;
  overrides: PlasmicNavButton__OverridesType;
  dataFetches?: PlasmicNavButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.root__iconOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
        [sty.root__iconOnly_type_secondary]:
          hasVariant(variants, "iconOnly", "iconOnly") &&
          hasVariant(variants, "type", "secondary"),
        [sty.root__labelIcon]: hasVariant(variants, "labelIcon", "labelIcon"),
        [sty.root__labelIcon_small]:
          hasVariant(variants, "labelIcon", "labelIcon") &&
          hasVariant(variants, "small", "small"),
        [sty.root__labelIcon_small_type_darkMode]:
          hasVariant(variants, "labelIcon", "labelIcon") &&
          hasVariant(variants, "small", "small") &&
          hasVariant(variants, "type", "darkMode"),
        [sty.root__labelIcon_small_type_primary]:
          hasVariant(variants, "labelIcon", "labelIcon") &&
          hasVariant(variants, "small", "small") &&
          hasVariant(variants, "type", "primary"),
        [sty.root__labelIcon_type_secondary]:
          hasVariant(variants, "labelIcon", "labelIcon") &&
          hasVariant(variants, "type", "secondary"),
        [sty.root__small]: hasVariant(variants, "small", "small"),
        [sty.root__type_darkMode]: hasVariant(variants, "type", "darkMode"),
        [sty.root__type_darkMode_small]:
          hasVariant(variants, "type", "darkMode") &&
          hasVariant(variants, "small", "small"),
        [sty.root__type_primary]: hasVariant(variants, "type", "primary"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
      })}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
      target={args.openInNewTab}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(hasVariant(variants, "iconOnly", "iconOnly") ? true : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildren__labelIcon]: hasVariant(
                variants,
                "labelIcon",
                "labelIcon"
              ),
              [sty.slotTargetChildren__labelIcon_small_type_darkMode]:
                hasVariant(variants, "labelIcon", "labelIcon") &&
                hasVariant(variants, "small", "small") &&
                hasVariant(variants, "type", "darkMode"),
              [sty.slotTargetChildren__small]: hasVariant(
                variants,
                "small",
                "small"
              ),
              [sty.slotTargetChildren__type_darkMode]: hasVariant(
                variants,
                "type",
                "darkMode"
              ),
              [sty.slotTargetChildren__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "iconOnly", "iconOnly") &&
        hasVariant(variants, "type", "secondary") &&
        triggers.hover_root
          ? true
          : hasVariant(variants, "labelIcon", "labelIcon") &&
            hasVariant(variants, "type", "secondary") &&
            triggers.hover_root
          ? true
          : hasVariant(variants, "type", "secondary") && triggers.hover_root
          ? false
          : hasVariant(variants, "labelIcon", "labelIcon") &&
            hasVariant(variants, "type", "secondary")
          ? true
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "type", "secondary")
          ? false
          : hasVariant(variants, "labelIcon", "labelIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: true ? (
              <ArrowRightIcon
                className={classNames(projectcss.all, sty.svg__ccEOm)}
                role={"img"}
              />
            ) : null,
            value: args.slot,
            className: classNames(sty.slotTargetSlot, {
              [sty.slotTargetSlot__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetSlot__iconOnly_type_secondary]:
                hasVariant(variants, "iconOnly", "iconOnly") &&
                hasVariant(variants, "type", "secondary"),
              [sty.slotTargetSlot__labelIcon]: hasVariant(
                variants,
                "labelIcon",
                "labelIcon"
              ),
              [sty.slotTargetSlot__labelIcon_type_secondary]:
                hasVariant(variants, "labelIcon", "labelIcon") &&
                hasVariant(variants, "type", "secondary"),
              [sty.slotTargetSlot__small]: hasVariant(
                variants,
                "small",
                "small"
              ),
              [sty.slotTargetSlot__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              )
            })
          })
        : null}
      {true ? (
        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(globalVariants, "screen", "mobile") ? IconIcon : IconIcon
          }
          className={classNames(projectcss.all, sty.svg, {
            [sty.svg__small]: hasVariant(variants, "small", "small")
          })}
          role={"img"}
        />
      ) : null}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavButton__VariantsArgs;
    args?: PlasmicNavButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavButton__Fetches;
  } & Omit<PlasmicNavButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavButton__ArgProps,
      internalVariantPropNames: PlasmicNavButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavButton";
  } else {
    func.displayName = `PlasmicNavButton.${nodeName}`;
  }
  return func;
}

export const PlasmicNavButton = Object.assign(
  // Top-level PlasmicNavButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavButton
    internalVariantProps: PlasmicNavButton__VariantProps,
    internalArgProps: PlasmicNavButton__ArgProps
  }
);

export default PlasmicNavButton;
/* prettier-ignore-end */