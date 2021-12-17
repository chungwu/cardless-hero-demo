// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: FHr7s50SrNP8
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
import PaddingWrapper from "../../PaddingWrapper"; // plasmic-import: 4i10JAkWDCTW/component
import Testimonial from "../../Testimonial"; // plasmic-import: EOORFxZkoS_u/component
import LinkButton from "../../LinkButton"; // plasmic-import: exoHRHBB2Jd8/component
import ArrowButton from "../../ArrowButton"; // plasmic-import: LVNvmxA1SLWB/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicTestimonialsScroller.module.css"; // plasmic-import: FHr7s50SrNP8/css

import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: E7YdTcD7oFygJ/icon

export type PlasmicTestimonialsScroller__VariantMembers = {};

export type PlasmicTestimonialsScroller__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonialsScroller__VariantsArgs;
export const PlasmicTestimonialsScroller__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialsScroller__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestimonialsScroller__ArgsType;
export const PlasmicTestimonialsScroller__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicTestimonialsScroller__OverridesType = {
  root?: p.Flex<"div">;
  scrollOuter?: p.Flex<"div">;
  scrollInner?: p.Flex<typeof PaddingWrapper>;
  buttons?: p.Flex<typeof PaddingWrapper>;
  controlButtons?: p.Flex<"div">;
  leftButton?: p.Flex<typeof ArrowButton>;
  rightButton?: p.Flex<typeof ArrowButton>;
};

export interface DefaultTestimonialsScrollerProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicTestimonialsScroller__RenderFunc(props: {
  variants: PlasmicTestimonialsScroller__VariantsArgs;
  args: PlasmicTestimonialsScroller__ArgsType;
  overrides: PlasmicTestimonialsScroller__OverridesType;
  dataFetches?: PlasmicTestimonialsScroller__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

  return (
    (
      hasVariant(globalVariants, "screen", "laptopSmall")
        ? true
        : hasVariant(globalVariants, "screen", "laptop")
        ? true
        : true
    ) ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
      >
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vjKnm)}
          >
            <div
              data-plasmic-name={"scrollOuter"}
              data-plasmic-override={overrides.scrollOuter}
              className={classNames(
                projectcss.all,
                sty.scrollOuter,
                "hiddenScrollBar" as const
              )}
            >
              <PaddingWrapper
                data-plasmic-name={"scrollInner"}
                data-plasmic-override={overrides.scrollInner}
                className={classNames("__wab_instance", sty.scrollInner)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rRxj9)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <Testimonial
                        avatar={
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__nHe3)}
                            displayHeight={"40px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"40px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/copy_of_cardless_com/images/profilePicturepng.png",
                              fullWidth: 160,
                              fullHeight: 160,
                              aspectRatio: undefined
                            }}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.testimonial__bnBgc
                        )}
                        content={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fhm76
                            )}
                          >
                            {
                              "“This is the last vertical in banking that hasn’t really been disrupted.”"
                            }
                          </div>
                        }
                        name={"Bloomberg"}
                        readMore={"readMore" as const}
                        username={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qzDja
                            )}
                          >
                            {"@username"}
                          </div>
                        }
                      >
                        <LinkButton
                          className={classNames(
                            "__wab_instance",
                            sty.linkButton__gUz3R
                          )}
                          destination={
                            "https://www.bloomberg.com/news/articles/2020-11-18/forget-free-flights-this-card-could-make-you-an-nba-benchwarmer" as const
                          }
                          icon2={"right" as const}
                          label={
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__jIfn5
                              )}
                            >
                              {"Read more"}
                            </div>
                          }
                          noPadding={"noPadding" as const}
                        >
                          <ArrowRightIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wgPXk
                            )}
                            role={"img"}
                          />
                        </LinkButton>
                      </Testimonial>
                    ),

                    value: args.children
                  })}
                </p.Stack>
              </PaddingWrapper>
            </div>

            <PaddingWrapper
              data-plasmic-name={"buttons"}
              data-plasmic-override={overrides.buttons}
              className={classNames("__wab_instance", sty.buttons)}
            >
              {(
                hasVariant(globalVariants, "screen", "tablet") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"controlButtons"}
                  data-plasmic-override={overrides.controlButtons}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.controlButtons)}
                >
                  <ArrowButton
                    data-plasmic-name={"leftButton"}
                    data-plasmic-override={overrides.leftButton}
                    className={classNames("__wab_instance", sty.leftButton)}
                  />

                  <ArrowButton
                    data-plasmic-name={"rightButton"}
                    data-plasmic-override={overrides.rightButton}
                    className={classNames("__wab_instance", sty.rightButton)}
                    right={"right" as const}
                  />
                </p.Stack>
              ) : null}
            </PaddingWrapper>
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "scrollOuter",
    "scrollInner",
    "buttons",
    "controlButtons",
    "leftButton",
    "rightButton"
  ],
  scrollOuter: ["scrollOuter", "scrollInner"],
  scrollInner: ["scrollInner"],
  buttons: ["buttons", "controlButtons", "leftButton", "rightButton"],
  controlButtons: ["controlButtons", "leftButton", "rightButton"],
  leftButton: ["leftButton"],
  rightButton: ["rightButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  scrollOuter: "div";
  scrollInner: typeof PaddingWrapper;
  buttons: typeof PaddingWrapper;
  controlButtons: "div";
  leftButton: typeof ArrowButton;
  rightButton: typeof ArrowButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonialsScroller__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialsScroller__VariantsArgs;
    args?: PlasmicTestimonialsScroller__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTestimonialsScroller__Fetches;
  } & Omit<PlasmicTestimonialsScroller__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonialsScroller__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestimonialsScroller__ArgProps,
      internalVariantPropNames: PlasmicTestimonialsScroller__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTestimonialsScroller__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialsScroller";
  } else {
    func.displayName = `PlasmicTestimonialsScroller.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialsScroller = Object.assign(
  // Top-level PlasmicTestimonialsScroller renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    scrollOuter: makeNodeComponent("scrollOuter"),
    scrollInner: makeNodeComponent("scrollInner"),
    buttons: makeNodeComponent("buttons"),
    controlButtons: makeNodeComponent("controlButtons"),
    leftButton: makeNodeComponent("leftButton"),
    rightButton: makeNodeComponent("rightButton"),

    // Metadata about props expected for PlasmicTestimonialsScroller
    internalVariantProps: PlasmicTestimonialsScroller__VariantProps,
    internalArgProps: PlasmicTestimonialsScroller__ArgProps
  }
);

export default PlasmicTestimonialsScroller;
/* prettier-ignore-end */
