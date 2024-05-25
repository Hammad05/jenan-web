"use client";
import { PropsWithChildren, useContext } from "react";
import { SplashScreenContext } from "./splash";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Body({ children }: PropsWithChildren) {
  const { isViwed } = useContext(SplashScreenContext);
  return (
    <div className="w-full flex align-center justify-center px-0 py-[var(--layout-padding-md)] md:p-[var(--layout-padding)]">
      <div className="max-w-[var(--layout-max-width)]">
        {!isViwed ? (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black">
            <Player src={"/loader.json"} autoplay loop />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
