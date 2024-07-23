// @/components/ConnectWallet.tsx
function ConnectWallet() {
  const { connect, disconnect } = useLaserEyes();

  return (
    <>
      <button onClick={() => connect("unisat")}>Connect Wallet</button>

      <button onClick={() => connect("xverse")}>Connect Wallet</button>

      <button onClick={disconnect}>Disconnect Wallet</button>
    </>
  );
}
