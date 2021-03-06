// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { ScreenVariantProvider } from "../components/plasmic/copy_of_cardless_com/PlasmicGlobalVariant__Screen";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/copy_of_cardless_com/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicReferAFriend } from "../components/plasmic/copy_of_cardless_com/PlasmicReferAFriend";

function ReferAFriend() {
  // Use PlasmicReferAFriend to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicReferAFriend are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicReferAFriend is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <PlasmicReferAFriend />
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default ReferAFriend;
