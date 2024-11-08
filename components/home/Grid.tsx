import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { items } from "@/data";

export function Grid() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items2 = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      styling: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      styling: "lg:col-span-2 md:col-span-3 md:row-span-2",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      styling: "lg:col-span-2 md:col-span-3 md:row-span-2",
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      styling: "lg:col-span-2 md:col-span-3 md:row-span-1",
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      styling: "md:col-span-3 md:row-span-2",
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      styling: "lg:col-span-2 md:col-span-3 md:row-span-1",
    },
  ];

  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton />}
          className={item.styling}
        />
      ))}
    </BentoGrid>
  );
}

export default Grid;
