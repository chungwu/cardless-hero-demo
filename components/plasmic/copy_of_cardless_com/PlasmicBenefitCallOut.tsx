// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: E_Hg5r5Konxr
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
import * as sty from "./PlasmicBenefitCallOut.module.css"; // plasmic-import: E_Hg5r5Konxr/css

export type PlasmicBenefitCallOut__VariantMembers = {};

export type PlasmicBenefitCallOut__VariantsArgs = {};
type VariantPropType = keyof PlasmicBenefitCallOut__VariantsArgs;
export const PlasmicBenefitCallOut__VariantProps = new Array<VariantPropType>();

export type PlasmicBenefitCallOut__ArgsType = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBenefitCallOut__ArgsType;
export const PlasmicBenefitCallOut__ArgProps = new Array<ArgPropType>(
  "title",
  "subtitle",
  "children"
);

export type PlasmicBenefitCallOut__OverridesType = {
  root?: p.Flex<"div">;
  copy?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultBenefitCallOutProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicBenefitCallOut__RenderFunc(props: {
  variants: PlasmicBenefitCallOut__VariantsArgs;
  args: PlasmicBenefitCallOut__ArgsType;
  overrides: PlasmicBenefitCallOut__OverridesType;
  dataFetches?: PlasmicBenefitCallOut__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <svg
            className={classNames(projectcss.all, sty.svg___39Rq)}
            role={"img"}
          />
        ),

        value: args.children
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"copy"}
        data-plasmic-override={overrides.copy}
        hasGap={true}
        className={classNames(projectcss.all, sty.copy)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Brand gift cards",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}

          {p.renderPlasmicSlot({
            defaultContents: "1 point is 1.25 points",
            value: args.subtitle,
            className: classNames(sty.slotTargetSubtitle)
          })}
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "copy", "freeBox"],
  copy: ["copy", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  copy: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBenefitCallOut__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBenefitCallOut__VariantsArgs;
    args?: PlasmicBenefitCallOut__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBenefitCallOut__Fetches;
  } & Omit<PlasmicBenefitCallOut__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBenefitCallOut__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBenefitCallOut__ArgProps,
      internalVariantPropNames: PlasmicBenefitCallOut__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBenefitCallOut__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBenefitCallOut";
  } else {
    func.displayName = `PlasmicBenefitCallOut.${nodeName}`;
  }
  return func;
}

export const PlasmicBenefitCallOut = Object.assign(
  // Top-level PlasmicBenefitCallOut renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    copy: makeNodeComponent("copy"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicBenefitCallOut
    internalVariantProps: PlasmicBenefitCallOut__VariantProps,
    internalArgProps: PlasmicBenefitCallOut__ArgProps
  }
);

export default PlasmicBenefitCallOut;
/* prettier-ignore-end */
