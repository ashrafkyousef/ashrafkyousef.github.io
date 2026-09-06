import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

type ImgProps = Omit<ImageProps, "src"> & { src: string };

/**
 * next/image only applies `basePath` through its optimizer loader, and that
 * loader is disabled on static hosts (`images.unoptimized`). So a plain
 * "/assets/x.jpg" src ships unprefixed and 404s under a project-page
 * deployment. Prefix local sources here so every call site gets it right.
 */
export default function Img({ src, ...props }: ImgProps) {
  return <Image src={withBasePath(src)} {...props} />;
}
