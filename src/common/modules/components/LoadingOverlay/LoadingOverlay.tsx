import LoadingAnimation from "public/animace.json";
import dynamic from "next/dynamic";

interface ILoadingOverlayProps {
  isPending: boolean;
}

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({ isPending }) => {
  if (!isPending) return null;
  return (
    <>
      <div className="z-1000 absolute left-0 top-0">
        <div className="fixed flex h-screen w-full flex-col items-center justify-center backdrop-blur-md transition-all">
          <Lottie
            animationData={LoadingAnimation}
            style={{ width: 200, height: 200 }}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingOverlay;
