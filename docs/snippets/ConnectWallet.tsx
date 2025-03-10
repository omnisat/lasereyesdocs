import { OYL, LEATHER, XVERSE, useLaserEyes } from "@omnisat/lasereyes";

function ConnectWallet() {
  const { connect, disconnect } = useLaserEyes();
  return (
    <>
      <button onClick={() => connect(OYL)}>Connect Wallet</button>

      <button onClick={() => connect(LEATHER)}>Connect Wallet</button>

      <button onClick={() => connect(XVERSE)}>Connect Wallet</button>

      <button onClick={disconnect}>Disconnect Wallet</button>
    </>
  );
}
