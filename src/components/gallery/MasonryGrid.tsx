"use client";

import Masonry from "react-masonry-css";
import { SmartImage, Text } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";
import React from "react";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  return (
    // <Masonry
    //   breakpointCols={breakpointColumnsObj}
    //   className={styles.masonryGrid}
    //   columnClassName={styles.masonryGridColumn}
    // >
    //   {gallery.images.map((image, index) => (
    //     <React.Fragment key={index}>
    //       <SmartImage
    //         priority={index < 10}
    //         sizes="(max-width: 560px) 100vw, 50vw"
    //         key={index}
    //         radius="m"
    //         aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
    //         src={image.src}
    //         alt={image.alt}
    //         className={styles.gridItem}
    //       />
    //       <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" className={styles.text}>
    //         {image.name}
    //         <br /> {image.degree}
    //         <br /> {image.role}
    //       </Text>
    //     </React.Fragment>
    //   ))}
    // </Masonry>
    <div className={styles.horizontalScroll}>
    {gallery.images.map((image, index) => (
      <div key={index} className={styles.item}>
        <SmartImage
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" className={styles.text}>
          <strong>{image.name}</strong>
          <br /> {image.degree}
          <br /> {image.role}
        </Text>
      </div>
    ))}
  </div>
  );
}
