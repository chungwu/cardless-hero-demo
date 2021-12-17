// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: pXF26myJL81n
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
import FauxUi from "../../FauxUi"; // plasmic-import: Tj1OgYPQx9N9/component
import FauxUiTextwrapper from "../../FauxUiTextwrapper"; // plasmic-import: 2N7y0bNNIt8J/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicImageLeftScroll.module.css"; // plasmic-import: pXF26myJL81n/css

export type PlasmicImageLeftScroll__VariantMembers = {};

export type PlasmicImageLeftScroll__VariantsArgs = {};
type VariantPropType = keyof PlasmicImageLeftScroll__VariantsArgs;
export const PlasmicImageLeftScroll__VariantProps =
  new Array<VariantPropType>();

export type PlasmicImageLeftScroll__ArgsType = {
  textItems?: React.ReactNode;
};

type ArgPropType = keyof PlasmicImageLeftScroll__ArgsType;
export const PlasmicImageLeftScroll__ArgProps = new Array<ArgPropType>(
  "textItems"
);

export type PlasmicImageLeftScroll__OverridesType = {
  root?: p.Flex<"div">;
  exploreCards2?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  stickyArea?: p.Flex<"div">;
  previousItem?: p.Flex<typeof FauxUi>;
  currentItem?: p.Flex<typeof FauxUi>;
  text?: p.Flex<"div">;
  vstack?: p.Flex<"div">;
};

export interface DefaultImageLeftScrollProps {
  textItems?: React.ReactNode;
  className?: string;
}

function PlasmicImageLeftScroll__RenderFunc(props: {
  variants: PlasmicImageLeftScroll__VariantsArgs;
  args: PlasmicImageLeftScroll__ArgsType;
  overrides: PlasmicImageLeftScroll__OverridesType;
  dataFetches?: PlasmicImageLeftScroll__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

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
      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : hasVariant(globalVariants, "screen", "tabletSmall")
          ? true
          : hasVariant(globalVariants, "screen", "tablet")
          ? true
          : hasVariant(globalVariants, "screen", "laptopSmall")
          ? true
          : hasVariant(globalVariants, "screen", "laptop")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"exploreCards2"}
          data-plasmic-override={overrides.exploreCards2}
          className={classNames(projectcss.all, sty.exploreCards2)}
        >
          {(
            hasVariant(globalVariants, "screen", "tabletSmall")
              ? true
              : hasVariant(globalVariants, "screen", "tablet")
              ? true
              : hasVariant(globalVariants, "screen", "laptopSmall")
              ? true
              : hasVariant(globalVariants, "screen", "laptop")
              ? true
              : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"stickyArea"}
                data-plasmic-override={overrides.stickyArea}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.stickyArea,
                  "isSticky" as const
                )}
              >
                {(
                  hasVariant(globalVariants, "screen", "tablet")
                    ? true
                    : hasVariant(globalVariants, "screen", "laptopSmall")
                    ? true
                    : true
                ) ? (
                  <FauxUi
                    data-plasmic-name={"previousItem"}
                    data-plasmic-override={overrides.previousItem}
                    className={classNames("__wab_instance", sty.previousItem)}
                  />
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "tablet")
                    ? true
                    : hasVariant(globalVariants, "screen", "laptopSmall")
                    ? true
                    : true
                ) ? (
                  <FauxUi
                    data-plasmic-name={"currentItem"}
                    data-plasmic-override={overrides.currentItem}
                    className={classNames("__wab_instance", sty.currentItem)}
                  />
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "tabletSmall")
                    ? true
                    : true
                ) ? (
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Image for illustrative purposes"
                      : hasVariant(globalVariants, "screen", "tabletSmall")
                      ? "Image for illustrative purposes"
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? "Image for illustrative purposes"
                      : hasVariant(globalVariants, "screen", "laptopSmall")
                      ? "Image for illustrative purposes"
                      : hasVariant(globalVariants, "screen", "laptop")
                      ? "Image for illustrative purposes"
                      : "Image for illustrative purposes"}
                  </div>
                ) : null}
              </p.Stack>

              {(
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "tabletSmall")
                  ? true
                  : hasVariant(globalVariants, "screen", "tablet")
                  ? true
                  : hasVariant(globalVariants, "screen", "laptopSmall")
                  ? true
                  : hasVariant(globalVariants, "screen", "laptop")
                  ? true
                  : true
              ) ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"vstack"}
                  data-plasmic-override={overrides.vstack}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.vstack)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__eMc0
                        )}
                      >
                        <FauxUiTextwrapper
                          caption={"caption" as const}
                          className={classNames(
                            "__wab_instance",
                            sty.fauxUiTextwrapper__ogWsE
                          )}
                          slot={
                            "We issue virtual cards immediately, letting you tap to pay and shop online right away"
                          }
                          slot2={
                            "And we’ll automatically send you a physical card for free"
                          }
                        >
                          {"No need to wait"}
                        </FauxUiTextwrapper>

                        <FauxUiTextwrapper
                          className={classNames(
                            "__wab_instance",
                            sty.fauxUiTextwrapper__kxpR3
                          )}
                          slot={
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__vWvNa
                              )}
                            >
                              {
                                "Redeem points for gift cards, cash, or something special"
                              }
                            </div>
                          }
                        >
                          {"Get rewarded"}
                        </FauxUiTextwrapper>

                        <FauxUiTextwrapper
                          className={classNames(
                            "__wab_instance",
                            sty.fauxUiTextwrapper__vZbfz
                          )}
                          slot={
                            "There’s no need to call support to lock your card or request a new number"
                          }
                        >
                          {"Security on your schedule"}
                        </FauxUiTextwrapper>

                        <FauxUiTextwrapper
                          className={classNames(
                            "__wab_instance",
                            sty.fauxUiTextwrapper__lDEeK
                          )}
                          slot={
                            "Get notified of transactions with our simple, customized alerts"
                          }
                        >
                          {"Don’t miss a thing"}
                        </FauxUiTextwrapper>

                        <FauxUiTextwrapper
                          className={classNames(
                            "__wab_instance",
                            sty.fauxUiTextwrapper__oinbv
                          )}
                          slot={
                            "With instant access to a digital card, it’s easier than ever to tap and pay"
                          }
                        >
                          {"Apple Pay support"}
                        </FauxUiTextwrapper>
                      </p.Stack>
                    ),

                    value: args.textItems
                  })}
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "exploreCards2",
    "freeBox",
    "stickyArea",
    "previousItem",
    "currentItem",
    "text",
    "vstack"
  ],
  exploreCards2: [
    "exploreCards2",
    "freeBox",
    "stickyArea",
    "previousItem",
    "currentItem",
    "text",
    "vstack"
  ],
  freeBox: [
    "freeBox",
    "stickyArea",
    "previousItem",
    "currentItem",
    "text",
    "vstack"
  ],
  stickyArea: ["stickyArea", "previousItem", "currentItem", "text"],
  previousItem: ["previousItem"],
  currentItem: ["currentItem"],
  text: ["text"],
  vstack: ["vstack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  exploreCards2: "div";
  freeBox: "div";
  stickyArea: "div";
  previousItem: typeof FauxUi;
  currentItem: typeof FauxUi;
  text: "div";
  vstack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImageLeftScroll__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImageLeftScroll__VariantsArgs;
    args?: PlasmicImageLeftScroll__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicImageLeftScroll__Fetches;
  } & Omit<PlasmicImageLeftScroll__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicImageLeftScroll__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicImageLeftScroll__ArgProps,
      internalVariantPropNames: PlasmicImageLeftScroll__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicImageLeftScroll__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageLeftScroll";
  } else {
    func.displayName = `PlasmicImageLeftScroll.${nodeName}`;
  }
  return func;
}

export const PlasmicImageLeftScroll = Object.assign(
  // Top-level PlasmicImageLeftScroll renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    exploreCards2: makeNodeComponent("exploreCards2"),
    freeBox: makeNodeComponent("freeBox"),
    stickyArea: makeNodeComponent("stickyArea"),
    previousItem: makeNodeComponent("previousItem"),
    currentItem: makeNodeComponent("currentItem"),
    text: makeNodeComponent("text"),
    vstack: makeNodeComponent("vstack"),

    // Metadata about props expected for PlasmicImageLeftScroll
    internalVariantProps: PlasmicImageLeftScroll__VariantProps,
    internalArgProps: PlasmicImageLeftScroll__ArgProps
  }
);

export default PlasmicImageLeftScroll;
/* prettier-ignore-end */