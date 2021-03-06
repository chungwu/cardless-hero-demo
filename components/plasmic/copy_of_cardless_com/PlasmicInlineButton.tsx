// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: NqmB3dxSPhdw
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
import * as sty from "./PlasmicInlineButton.module.css"; // plasmic-import: NqmB3dxSPhdw/css

import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: E7YdTcD7oFygJ/icon

export type PlasmicInlineButton__VariantMembers = {};

export type PlasmicInlineButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicInlineButton__VariantsArgs;
export const PlasmicInlineButton__VariantProps = new Array<VariantPropType>();

export type PlasmicInlineButton__ArgsType = {
  primaryButton2?: React.ReactNode;
  children?: React.ReactNode;
  destination?: string | PageHref;
};

type ArgPropType = keyof PlasmicInlineButton__ArgsType;
export const PlasmicInlineButton__ArgProps = new Array<ArgPropType>(
  "primaryButton2",
  "children",
  "destination"
);

export type PlasmicInlineButton__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultInlineButtonProps {
  primaryButton2?: React.ReactNode;
  children?: React.ReactNode;
  destination?: string | PageHref;
  className?: string;
}

function PlasmicInlineButton__RenderFunc(props: {
  variants: PlasmicInlineButton__VariantsArgs;
  args: PlasmicInlineButton__ArgsType;
  overrides: PlasmicInlineButton__OverridesType;
  dataFetches?: PlasmicInlineButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root)}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Label",
        value: args.primaryButton2,
        className: classNames(sty.slotTargetPrimaryButton2)
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <ArrowRightIcon
            className={classNames(projectcss.all, sty.svg__ghsSk)}
            role={"img"}
          />
        ),

        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
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
  PlasmicInlineButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInlineButton__VariantsArgs;
    args?: PlasmicInlineButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInlineButton__Fetches;
  } & Omit<PlasmicInlineButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInlineButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInlineButton__ArgProps,
      internalVariantPropNames: PlasmicInlineButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInlineButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInlineButton";
  } else {
    func.displayName = `PlasmicInlineButton.${nodeName}`;
  }
  return func;
}

export const PlasmicInlineButton = Object.assign(
  // Top-level PlasmicInlineButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicInlineButton
    internalVariantProps: PlasmicInlineButton__VariantProps,
    internalArgProps: PlasmicInlineButton__ArgProps
  }
);

export default PlasmicInlineButton;
/* prettier-ignore-end */
