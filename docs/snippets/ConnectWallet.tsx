// @/components/ConnectWallet.tsx
function ConnectWallet() {
  const { connect, disconnect } = useLaserEyes();

  return (
    <>
      <button onClick={() => connect("unisat")}>Connect Unisat Wallet</button>

      <button onClick={disconnect}>Disconnect Wallet</button>
    </>
  );
}
