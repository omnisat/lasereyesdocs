import { LaserEyesProvider, MAINNET } from "@omnisat/lasereyes";
import Test from "./test";

export default function Container() {
  return (
    <LaserEyesProvider config={{{ network: MAINNET}}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <Test />
      </div>
    </LaserEyesProvider>
  );
}
