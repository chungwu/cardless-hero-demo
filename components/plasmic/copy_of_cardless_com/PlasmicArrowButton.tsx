// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: LVNvmxA1SLWB
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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicArrowButton.module.css"; // plasmic-import: LVNvmxA1SLWB/css

import ArrowLeftsvg2Icon from "./icons/PlasmicIcon__ArrowLeftsvg2"; // plasmic-import: C2dJk_FRFN0gC/icon
import ArrowRight3Icon from "./icons/PlasmicIcon__ArrowRight3"; // plasmic-import: 4UmkTfAtphPaa/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: vECUqCHO6TBgZ/icon

export type PlasmicArrowButton__VariantMembers = {
  right: "right";
  dark: "dark";
};

export type PlasmicArrowButton__VariantsArgs = {
  right?: SingleBooleanChoiceArg<"right">;
  dark?: SingleBooleanChoiceArg<"dark">;
};

type VariantPropType = keyof PlasmicArrowButton__VariantsArgs;
export const PlasmicArrowButton__VariantProps = new Array<VariantPropType>(
  "right",
  "dark"
);

export type PlasmicArrowButton__ArgsType = {};
type ArgPropType = keyof PlasmicArrowButton__ArgsType;
export const PlasmicArrowButton__ArgProps = new Array<ArgPropType>();

export type PlasmicArrowButton__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultArrowButtonProps {
  right?: SingleBooleanChoiceArg<"right">;
  dark?: SingleBooleanChoiceArg<"dark">;
  className?: string;
}

function PlasmicArrowButton__RenderFunc(props: {
  variants: PlasmicArrowButton__VariantsArgs;
  args: PlasmicArrowButton__ArgsType;
  overrides: PlasmicArrowButton__OverridesType;
  dataFetches?: PlasmicArrowButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root, {
        [sty.root__dark]: hasVariant(variants, "dark", "dark"),
        [sty.root__right]: hasVariant(variants, "right", "right"),
        [sty.root__right_dark]:
          hasVariant(variants, "right", "right") &&
          hasVariant(variants, "dark", "dark")
      })}
      component={Link}
      platform={"nextjs"}
    >
      {(hasVariant(variants, "right", "right") ? true : true) ? (
        <ArrowLeftsvg2Icon
          className={classNames(projectcss.all, sty.svg__hk1TN, {
            [sty.svg__dark__hk1TNoMcXn]: hasVariant(variants, "dark", "dark"),
            [sty.svg__right__hk1TNqLdqi]: hasVariant(variants, "right", "right")
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant(variants, "right", "right") ? true : true) ? (
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "right", "right")
              ? ArrowRightsvgIcon
              : ArrowRight3Icon
          }
          className={classNames(projectcss.all, sty.svg__jlk69, {
            [sty.svg__right__jlk69QLdqi]: hasVariant(
              variants,
              "right",
              "right"
            ),
            [sty.svg__right_dark__jlk69QLdqiOMcXn]:
              hasVariant(variants, "right", "right") &&
              hasVariant(variants, "dark", "dark")
          })}
          role={"img"}
        />
      ) : null}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArrowButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArrowButton__VariantsArgs;
    args?: PlasmicArrowButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicArrowButton__Fetches;
  } & Omit<PlasmicArrowButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicArrowButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicArrowButton__ArgProps,
      internalVariantPropNames: PlasmicArrowButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicArrowButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArrowButton";
  } else {
    func.displayName = `PlasmicArrowButton.${nodeName}`;
  }
  return func;
}

export const PlasmicArrowButton = Object.assign(
  // Top-level PlasmicArrowButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicArrowButton
    internalVariantProps: PlasmicArrowButton__VariantProps,
    internalArgProps: PlasmicArrowButton__ArgProps
  }
);

export default PlasmicArrowButton;
/* prettier-ignore-end */