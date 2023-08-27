import { Html, useProgress } from "@react-three/drei"
import "@styles/logo.css"
export default function Suspense() {
  const { progress } = useProgress();
  const progressBarContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '500px',
    textAlign: 'center'
  }

  const progressBarStyle = {
    display: 'inline-block',
    width: '100%',
    height: '10px',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    overflow: 'hidden'
  }

  const progressBarFillStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'turquoise'
  }

  return (
    <Html
      center
      style={{
        height: "100vh",
        width: "100vw",
        background: "rgba(0,0,0,.2)",
      }}
    >
      {/* @ts-ignore */}
      <div style={progressBarContainerStyle}>
        <h1 className="flex items-center justify-center text-4xl sm:text-7xl text-cyan-300 modak">
          {/* <img src="favicon.svg" alt="Logo" class="h-8" /> */}
          Welcome to RAMI&apos;s Website
        </h1>
        <div style={progressBarStyle}>
          <div style={progressBarFillStyle}></div>
        </div>
      </div>
    </Html>
  );
}