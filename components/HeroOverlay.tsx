// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHeroOverlay,
  DefaultHeroOverlayProps
} from "./plasmic/copy_of_cardless_com/PlasmicHeroOverlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {motion} from "framer-motion";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface HeroOverlayProps extends Omit<DefaultHeroOverlayProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultHeroOverlayProps altogether and have
// total control over the props for your component.
interface HeroOverlayProps extends DefaultHeroOverlayProps {}

function HeroOverlay_(props: HeroOverlayProps, ref: HTMLElementRefOf<"div">) {
  const animatedChildProps = (key: string) => {
    return {
      as: motion.div,
      props: {
        key,
        layout: true,
      }
    };
  }
  return (
    <PlasmicHeroOverlay 
      root={{ 
        as: motion.div,
        props: {
          ref,
          layout: true,
        },
      }}
      balance={animatedChildProps("balance")}
      transaction3={animatedChildProps("t3")}
      transaction2={animatedChildProps("t2")}
      transaction={animatedChildProps("t1")}
      rewards={animatedChildProps("rewards")}
      image2={animatedChildProps("image2")}
      {...props} 
    />
  );
}

const HeroOverlay = React.forwardRef(HeroOverlay_);
export default HeroOverlay;
