// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: JiFB2-JKD_Yz
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
import * as sty from "./PlasmicOfferTerms.module.css"; // plasmic-import: JiFB2-JKD_Yz/css

export type PlasmicOfferTerms__VariantMembers = {
  asterisk: "asterisk";
};

export type PlasmicOfferTerms__VariantsArgs = {
  asterisk?: SingleBooleanChoiceArg<"asterisk">;
};

type VariantPropType = keyof PlasmicOfferTerms__VariantsArgs;
export const PlasmicOfferTerms__VariantProps = new Array<VariantPropType>(
  "asterisk"
);

export type PlasmicOfferTerms__ArgsType = {
  children?: React.ReactNode;
  children2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOfferTerms__ArgsType;
export const PlasmicOfferTerms__ArgProps = new Array<ArgPropType>(
  "children",
  "children2"
);

export type PlasmicOfferTerms__OverridesType = {
  root?: p.Flex<"div">;
  offersLink?: p.Flex<"div">;
};

export interface DefaultOfferTermsProps {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  asterisk?: SingleBooleanChoiceArg<"asterisk">;
  className?: string;
}

function PlasmicOfferTerms__RenderFunc(props: {
  variants: PlasmicOfferTerms__VariantsArgs;
  args: PlasmicOfferTerms__ArgsType;
  overrides: PlasmicOfferTerms__OverridesType;
  dataFetches?: PlasmicOfferTerms__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"offersLink"}
        data-plasmic-override={overrides.offersLink}
        hasGap={true}
        className={classNames(projectcss.all, sty.offersLink)}
      >
        {(hasVariant(variants, "asterisk", "asterisk") ? true : false)
          ? p.renderPlasmicSlot({
              defaultContents: "*",
              value: args.children2,
              className: classNames(sty.slotTargetChildren2, {
                [sty.slotTargetChildren2__asterisk]: hasVariant(
                  variants,
                  "asterisk",
                  "asterisk"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents: "Offer Terms",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__asterisk]: hasVariant(
              variants,
              "asterisk",
              "asterisk"
            )
          })
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "offersLink"],
  offersLink: ["offersLink"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  offersLink: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOfferTerms__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOfferTerms__VariantsArgs;
    args?: PlasmicOfferTerms__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicOfferTerms__Fetches;
  } & Omit<PlasmicOfferTerms__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOfferTerms__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOfferTerms__ArgProps,
      internalVariantPropNames: PlasmicOfferTerms__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicOfferTerms__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOfferTerms";
  } else {
    func.displayName = `PlasmicOfferTerms.${nodeName}`;
  }
  return func;
}

export const PlasmicOfferTerms = Object.assign(
  // Top-level PlasmicOfferTerms renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    offersLink: makeNodeComponent("offersLink"),

    // Metadata about props expected for PlasmicOfferTerms
    internalVariantProps: PlasmicOfferTerms__VariantProps,
    internalArgProps: PlasmicOfferTerms__ArgProps
  }
);

export default PlasmicOfferTerms;
/* prettier-ignore-end */
