import { Suspense, type HTMLAttributes } from "react";
import HeroScene from "./HeroScene";
import Loading from "./Loading";

interface HeroSceneProps extends HTMLAttributes<HTMLDivElement> {
  fallback?: JSX.Element;
}
export default function SceneSuspenseWrapper(props: HeroSceneProps) {
  const { children, fallback = null, ...rest } = props;
  return (
    <Suspense fallback={<Loading />}>
      <HeroScene {...rest} />
    </Suspense>
  );
}
