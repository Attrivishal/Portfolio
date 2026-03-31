export default function GridBackground() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.08), transparent)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </>
  )
}
