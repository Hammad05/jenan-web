'use client';
import NextImage from "next/image";
import { ImageLoaderProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
}

const Image: React.FC<any> = (props) => {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}

export default Image;
