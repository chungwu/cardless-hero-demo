// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: 065U9QSynAe8
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
import { NavBar } from "../../layout/NavBar"; // plasmic-import: VpJrKbBamu0m/codeComponent
import BrandLogo from "../../BrandLogo"; // plasmic-import: Ih8CO7qIPWwS/component
import OfferTerms from "../../OfferTerms"; // plasmic-import: JiFB2-JKD_Yz/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant
import {
  UnnamedGlobalGroupOfVariantsValue,
  useUnnamedGlobalGroupOfVariants
} from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: RIq68Up0Sibe/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicProductHero.module.css"; // plasmic-import: 065U9QSynAe8/css

import ArrowRight4Icon from "./icons/PlasmicIcon__ArrowRight4"; // plasmic-import: USjAvgCpmbA75/icon

export type PlasmicProductHero__VariantMembers = {
  cavs: "cavs";
  manutd: "manutd";
  celtics: "celtics";
  marlins: "marlins";
};

export type PlasmicProductHero__VariantsArgs = {
  cavs?: SingleBooleanChoiceArg<"cavs">;
  manutd?: SingleBooleanChoiceArg<"manutd">;
  celtics?: SingleBooleanChoiceArg<"celtics">;
  marlins?: SingleBooleanChoiceArg<"marlins">;
};

type VariantPropType = keyof PlasmicProductHero__VariantsArgs;
export const PlasmicProductHero__VariantProps = new Array<VariantPropType>(
  "cavs",
  "manutd",
  "celtics",
  "marlins"
);

export type PlasmicProductHero__ArgsType = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProductHero__ArgsType;
export const PlasmicProductHero__ArgProps = new Array<ArgPropType>(
  "title",
  "subtitle"
);

export type PlasmicProductHero__OverridesType = {
  root?: p.Flex<"div">;
  navBarCodeComponent?: p.Flex<typeof NavBar>;
  brandLogo2?: p.Flex<typeof BrandLogo>;
  exploreCards2?: p.Flex<"div">;
  textCtAs?: p.Flex<"div">;
  copyCtAs?: p.Flex<"div">;
  copy10?: p.Flex<"div">;
  buttonFrame?: p.Flex<"div">;
  pill3?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
  offerTerms?: p.Flex<typeof OfferTerms>;
  ratesTerms?: p.Flex<typeof OfferTerms>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultProductHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cavs?: SingleBooleanChoiceArg<"cavs">;
  manutd?: SingleBooleanChoiceArg<"manutd">;
  celtics?: SingleBooleanChoiceArg<"celtics">;
  marlins?: SingleBooleanChoiceArg<"marlins">;
  className?: string;
}

function PlasmicProductHero__RenderFunc(props: {
  variants: PlasmicProductHero__VariantsArgs;
  args: PlasmicProductHero__ArgsType;
  overrides: PlasmicProductHero__OverridesType;
  dataFetches?: PlasmicProductHero__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu(),
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
          [sty.root__cavs]: hasVariant(variants, "cavs", "cavs"),
          [sty.root__celtics]: hasVariant(variants, "celtics", "celtics"),
          [sty.root__manutd]: hasVariant(variants, "manutd", "manutd"),
          [sty.root__marlins]: hasVariant(variants, "marlins", "marlins")
        })}
      >
        <NavBar
          data-plasmic-name={"navBarCodeComponent"}
          data-plasmic-override={overrides.navBarCodeComponent}
          brandLogo={
            <BrandLogo
              data-plasmic-name={"brandLogo2"}
              data-plasmic-override={overrides.brandLogo2}
              className={classNames("__wab_instance", sty.brandLogo2, {
                [sty.brandLogo2__celtics]: hasVariant(
                  variants,
                  "celtics",
                  "celtics"
                ),
                [sty.brandLogo2__manutd]: hasVariant(
                  variants,
                  "manutd",
                  "manutd"
                ),
                [sty.brandLogo2__marlins]: hasVariant(
                  variants,
                  "marlins",
                  "marlins"
                )
              })}
              logos={
                hasVariant(variants, "marlins", "marlins")
                  ? ("marlins" as const)
                  : hasVariant(variants, "celtics", "celtics")
                  ? ("celtics" as const)
                  : hasVariant(variants, "manutd", "manutd")
                  ? ("manUtd" as const)
                  : ("cavs" as const)
              }
            />
          }
          brandName={
            hasVariant(variants, "marlins", "marlins")
              ? "Miami Marlins"
              : hasVariant(variants, "celtics", "celtics")
              ? "Boston Celtics"
              : hasVariant(variants, "cavs", "cavs")
              ? "Cleveland Cavaliers"
              : "Manchester United"
          }
          branded={true}
          className={classNames("__wab_instance", sty.navBarCodeComponent, {
            [sty.navBarCodeComponent__cavs]: hasVariant(
              variants,
              "cavs",
              "cavs"
            ),
            [sty.navBarCodeComponent__celtics]: hasVariant(
              variants,
              "celtics",
              "celtics"
            ),
            [sty.navBarCodeComponent__manutd]: hasVariant(
              variants,
              "manutd",
              "manutd"
            ),
            [sty.navBarCodeComponent__marlins]: hasVariant(
              variants,
              "marlins",
              "marlins"
            )
          })}
          ctaDestination={
            hasVariant(variants, "marlins", "marlins")
              ? ("/apply/marlins" as const)
              : hasVariant(variants, "celtics", "celtics")
              ? ("/apply/celtics" as const)
              : hasVariant(variants, "manutd", "manutd")
              ? ("/apply/manutd" as const)
              : hasVariant(variants, "cavs", "cavs")
              ? ("/apply/cavs" as const)
              : undefined
          }
          dark={true}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aqY6L, {
            [sty.freeBox__cavs__aqY6LifBVr]: hasVariant(
              variants,
              "cavs",
              "cavs"
            ),
            [sty.freeBox__celtics__aqY6Lxi55K]: hasVariant(
              variants,
              "celtics",
              "celtics"
            ),
            [sty.freeBox__marlins__aqY6L3MZku]: hasVariant(
              variants,
              "marlins",
              "marlins"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yrt5J, {
              [sty.freeBox__celtics__yrt5Jxi55K]: hasVariant(
                variants,
                "celtics",
                "celtics"
              ),
              [sty.freeBox__marlins__yrt5J3MZku]: hasVariant(
                variants,
                "marlins",
                "marlins"
              )
            })}
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
                className={classNames(projectcss.all, sty.exploreCards2, {
                  [sty.exploreCards2__marlins]: hasVariant(
                    variants,
                    "marlins",
                    "marlins"
                  )
                })}
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
                    className={classNames(projectcss.all, sty.freeBox__f76IC)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"textCtAs"}
                      data-plasmic-override={overrides.textCtAs}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.textCtAs, {
                        [sty.textCtAs__cavs]: hasVariant(
                          variants,
                          "cavs",
                          "cavs"
                        ),
                        [sty.textCtAs__manutd]: hasVariant(
                          variants,
                          "manutd",
                          "manutd"
                        ),
                        [sty.textCtAs__marlins]: hasVariant(
                          variants,
                          "marlins",
                          "marlins"
                        )
                      })}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"copyCtAs"}
                        data-plasmic-override={overrides.copyCtAs}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.copyCtAs, {
                          [sty.copyCtAs__cavs]: hasVariant(
                            variants,
                            "cavs",
                            "cavs"
                          )
                        })}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"copy10"}
                          data-plasmic-override={overrides.copy10}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.copy10)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__au4Rk,
                              {
                                [sty.text__marlins__au4Rk3MZku]: hasVariant(
                                  variants,
                                  "marlins",
                                  "marlins"
                                )
                              }
                            )}
                          >
                            {"Limited time offer"}
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__iH3Wd,
                              {
                                [sty.freeBox__manutd__iH3WDnxFfc]: hasVariant(
                                  variants,
                                  "manutd",
                                  "manutd"
                                ),
                                [sty.freeBox__marlins__iH3Wd3MZku]: hasVariant(
                                  variants,
                                  "marlins",
                                  "marlins"
                                )
                              }
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: "Earn Double Points!",
                              value: args.title,
                              className: classNames(sty.slotTargetTitle, {
                                [sty.slotTargetTitle__manutd]: hasVariant(
                                  variants,
                                  "manutd",
                                  "manutd"
                                ),
                                [sty.slotTargetTitle__marlins]: hasVariant(
                                  variants,
                                  "marlins",
                                  "marlins"
                                )
                              })
                            })}
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__hm0DI,
                              {
                                [sty.freeBox__marlins__hm0DI3MZku]: hasVariant(
                                  variants,
                                  "marlins",
                                  "marlins"
                                )
                              }
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents:
                                "On qualifying purchases in your first year, up to 100,000 bonus points*",
                              value: args.subtitle,
                              className: classNames(sty.slotTargetSubtitle, {
                                [sty.slotTargetSubtitle__marlins]: hasVariant(
                                  variants,
                                  "marlins",
                                  "marlins"
                                )
                              })
                            })}
                          </div>
                        </p.Stack>

                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"buttonFrame"}
                          data-plasmic-override={overrides.buttonFrame}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.buttonFrame,
                            {
                              [sty.buttonFrame__cavs]: hasVariant(
                                variants,
                                "cavs",
                                "cavs"
                              ),
                              [sty.buttonFrame__celtics]: hasVariant(
                                variants,
                                "celtics",
                                "celtics"
                              ),
                              [sty.buttonFrame__manutd]: hasVariant(
                                variants,
                                "manutd",
                                "manutd"
                              )
                            }
                          )}
                        >
                          <p.PlasmicLink
                            data-plasmic-name={"pill3"}
                            data-plasmic-override={overrides.pill3}
                            className={classNames(projectcss.a, sty.pill3, {
                              [sty.pill3__cavs]: hasVariant(
                                variants,
                                "cavs",
                                "cavs"
                              ),
                              [sty.pill3__celtics]: hasVariant(
                                variants,
                                "celtics",
                                "celtics"
                              ),
                              [sty.pill3__manutd]: hasVariant(
                                variants,
                                "manutd",
                                "manutd"
                              ),
                              [sty.pill3__marlins]: hasVariant(
                                variants,
                                "marlins",
                                "marlins"
                              )
                            })}
                            component={Link}
                            href={
                              hasVariant(variants, "marlins", "marlins")
                                ? ("/apply/marlins" as const)
                                : hasVariant(variants, "celtics", "celtics")
                                ? ("/apply/celtics" as const)
                                : hasVariant(variants, "manutd", "manutd")
                                ? ("/apply/manutd" as const)
                                : hasVariant(variants, "cavs", "cavs")
                                ? ("/apply/cavs" as const)
                                : ("/apply" as const)
                            }
                            platform={"nextjs"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__eb2Ql,
                                {
                                  [sty.text__cavs__eb2QlifBVr]: hasVariant(
                                    variants,
                                    "cavs",
                                    "cavs"
                                  ),
                                  [sty.text__celtics__eb2QlXi55K]: hasVariant(
                                    variants,
                                    "celtics",
                                    "celtics"
                                  )
                                }
                              )}
                            >
                              {"Apply now"}
                            </div>

                            {false ? (
                              <ArrowRight4Icon
                                data-plasmic-name={"svg"}
                                data-plasmic-override={overrides.svg}
                                className={classNames(projectcss.all, sty.svg)}
                                role={"img"}
                              />
                            ) : null}
                          </p.PlasmicLink>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__hRdxi,
                              {
                                [sty.freeBox__cavs__hRdxiifBVr]: hasVariant(
                                  variants,
                                  "cavs",
                                  "cavs"
                                )
                              }
                            )}
                          >
                            <OfferTerms
                              data-plasmic-name={"offerTerms"}
                              data-plasmic-override={overrides.offerTerms}
                              asterisk={"asterisk" as const}
                              children2={
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__rmudj
                                  )}
                                >
                                  {"*"}
                                </div>
                              }
                              className={classNames(
                                "__wab_instance",
                                sty.offerTerms
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__bQidw,
                                  {
                                    [sty.text__marlins__bQidw3MZku]: hasVariant(
                                      variants,
                                      "marlins",
                                      "marlins"
                                    )
                                  }
                                )}
                              >
                                {"Offer Terms"}
                              </div>
                            </OfferTerms>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__rKZm
                              )}
                            >
                              {" and "}
                            </div>

                            <OfferTerms
                              data-plasmic-name={"ratesTerms"}
                              data-plasmic-override={overrides.ratesTerms}
                              className={classNames(
                                "__wab_instance",
                                sty.ratesTerms
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__soB5
                                )}
                              >
                                {"Rates & Fees"}
                              </div>
                            </OfferTerms>
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </div>
                ) : null}
              </div>
            ) : null}
          </p.Stack>

          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox___7Rx4D, {
                [sty.freeBox__cavs___7Rx4DifBVr]: hasVariant(
                  variants,
                  "cavs",
                  "cavs"
                ),
                [sty.freeBox__celtics___7Rx4DXi55K]: hasVariant(
                  variants,
                  "celtics",
                  "celtics"
                ),
                [sty.freeBox__manutd___7Rx4DnxFfc]: hasVariant(
                  variants,
                  "manutd",
                  "manutd"
                ),
                [sty.freeBox__marlins___7Rx4D3MZku]: hasVariant(
                  variants,
                  "marlins",
                  "marlins"
                )
              })}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "tabletSmall")
                  ? true
                  : hasVariant(globalVariants, "screen", "laptop")
                  ? true
                  : true
              ) ? (
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img, {
                    [sty.img__cavs]: hasVariant(variants, "cavs", "cavs"),
                    [sty.img__celtics]: hasVariant(
                      variants,
                      "celtics",
                      "celtics"
                    ),
                    [sty.img__celtics_global_unnamedGlobalGroupOfVariants_unnamedVariant]:
                      hasVariant(variants, "celtics", "celtics") &&
                      hasVariant(
                        globalVariants,
                        "unnamedGlobalGroupOfVariants",
                        "unnamedVariant"
                      ),
                    [sty.img__manutd]: hasVariant(variants, "manutd", "manutd"),
                    [sty.img__marlins]: hasVariant(
                      variants,
                      "marlins",
                      "marlins"
                    )
                  })}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? ("150%" as const)
                      : hasVariant(globalVariants, "screen", "tabletSmall")
                      ? ("179%" as const)
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? ("auto" as const)
                      : hasVariant(globalVariants, "screen", "laptopSmall")
                      ? ("auto" as const)
                      : ("817px" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={
                    hasVariant(variants, "marlins", "marlins")
                      ? ("none" as const)
                      : hasVariant(globalVariants, "screen", "tabletSmall")
                      ? ("400%" as const)
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? ("none" as const)
                      : ("none" as const)
                  }
                  displayMinHeight={
                    hasVariant(globalVariants, "screen", "tabletSmall")
                      ? ("300px" as const)
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? ("500px" as const)
                      : hasVariant(globalVariants, "screen", "laptopSmall")
                      ? ("700px" as const)
                      : ("0" as const)
                  }
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(variants, "marlins", "marlins")
                      ? ("138.74%" as const)
                      : hasVariant(globalVariants, "screen", "mobile")
                      ? ("150%" as const)
                      : hasVariant(globalVariants, "screen", "tabletSmall")
                      ? ("145%" as const)
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? ("100%" as const)
                      : hasVariant(globalVariants, "screen", "laptopSmall")
                      ? ("120%" as const)
                      : hasVariant(globalVariants, "screen", "laptop")
                      ? ("677px" as const)
                      : ("138.74%" as const)
                  }
                  loading={"lazy" as const}
                  src={
                    hasVariant(variants, "marlins", "marlins")
                      ? {
                          src: "/plasmic/copy_of_cardless_com/images/marlinsTranspCard.png",
                          fullWidth: 2400,
                          fullHeight: 2400,
                          aspectRatio: undefined
                        }
                      : hasVariant(variants, "celtics", "celtics") &&
                        hasVariant(
                          globalVariants,
                          "unnamedGlobalGroupOfVariants",
                          "unnamedVariant"
                        )
                      ? {
                          src: "/plasmic/copy_of_cardless_com/images/celticsTranspCard.png",
                          fullWidth: 2400,
                          fullHeight: 2400,
                          aspectRatio: undefined
                        }
                      : hasVariant(variants, "celtics", "celtics")
                      ? {
                          src: "/plasmic/copy_of_cardless_com/images/celticsTranspCard.png",
                          fullWidth: 2400,
                          fullHeight: 2400,
                          aspectRatio: undefined
                        }
                      : hasVariant(variants, "cavs", "cavs")
                      ? {
                          src: "/plasmic/copy_of_cardless_com/images/cavsTranspCard2.png",
                          fullWidth: 2400,
                          fullHeight: 2400,
                          aspectRatio: undefined
                        }
                      : {
                          src: "/plasmic/copy_of_cardless_com/images/image19.png",
                          fullWidth: 2400,
                          fullHeight: 2400,
                          aspectRatio: undefined
                        }
                  }
                />
              ) : null}
            </div>
          ) : null}
        </p.Stack>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBarCodeComponent",
    "brandLogo2",
    "exploreCards2",
    "textCtAs",
    "copyCtAs",
    "copy10",
    "buttonFrame",
    "pill3",
    "svg",
    "offerTerms",
    "ratesTerms",
    "img"
  ],
  navBarCodeComponent: ["navBarCodeComponent", "brandLogo2"],
  brandLogo2: ["brandLogo2"],
  exploreCards2: [
    "exploreCards2",
    "textCtAs",
    "copyCtAs",
    "copy10",
    "buttonFrame",
    "pill3",
    "svg",
    "offerTerms",
    "ratesTerms"
  ],
  textCtAs: [
    "textCtAs",
    "copyCtAs",
    "copy10",
    "buttonFrame",
    "pill3",
    "svg",
    "offerTerms",
    "ratesTerms"
  ],
  copyCtAs: [
    "copyCtAs",
    "copy10",
    "buttonFrame",
    "pill3",
    "svg",
    "offerTerms",
    "ratesTerms"
  ],
  copy10: ["copy10"],
  buttonFrame: ["buttonFrame", "pill3", "svg", "offerTerms", "ratesTerms"],
  pill3: ["pill3", "svg"],
  svg: ["svg"],
  offerTerms: ["offerTerms"],
  ratesTerms: ["ratesTerms"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarCodeComponent: typeof NavBar;
  brandLogo2: typeof BrandLogo;
  exploreCards2: "div";
  textCtAs: "div";
  copyCtAs: "div";
  copy10: "div";
  buttonFrame: "div";
  pill3: "a";
  svg: "svg";
  offerTerms: typeof OfferTerms;
  ratesTerms: typeof OfferTerms;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductHero__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductHero__VariantsArgs;
    args?: PlasmicProductHero__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProductHero__Fetches;
  } & Omit<PlasmicProductHero__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductHero__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProductHero__ArgProps,
      internalVariantPropNames: PlasmicProductHero__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProductHero__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductHero";
  } else {
    func.displayName = `PlasmicProductHero.${nodeName}`;
  }
  return func;
}

export const PlasmicProductHero = Object.assign(
  // Top-level PlasmicProductHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarCodeComponent: makeNodeComponent("navBarCodeComponent"),
    brandLogo2: makeNodeComponent("brandLogo2"),
    exploreCards2: makeNodeComponent("exploreCards2"),
    textCtAs: makeNodeComponent("textCtAs"),
    copyCtAs: makeNodeComponent("copyCtAs"),
    copy10: makeNodeComponent("copy10"),
    buttonFrame: makeNodeComponent("buttonFrame"),
    pill3: makeNodeComponent("pill3"),
    svg: makeNodeComponent("svg"),
    offerTerms: makeNodeComponent("offerTerms"),
    ratesTerms: makeNodeComponent("ratesTerms"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductHero
    internalVariantProps: PlasmicProductHero__VariantProps,
    internalArgProps: PlasmicProductHero__ArgProps
  }
);

export default PlasmicProductHero;
/* prettier-ignore-end */