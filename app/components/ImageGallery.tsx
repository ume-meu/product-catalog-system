"use client"

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setImage] = useState(images[0]);
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
      {/* <div className="order-last flex gap-4 lg:order-none lg:flex-col lg:max-h-[500px] lg:overflow-y-auto"> */}
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="photo"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
        {/* <div className="relative overflow hidden rounded-lg bg-gray-100 lg:col-span-4">
          <Image
            src={urlFor(bigImage).url()}
            alt="Photo"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div> */}
      </div>
    </div>
  );
}
