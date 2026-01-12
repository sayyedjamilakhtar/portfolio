"use client";
import { Category } from "@/lib/types/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "@/store/features/activeCategorySlice";

export default function CategoriesTabs({
  categories,
}: {
  categories: Category[];
}) {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    dispatch(updateCategory(activeCategory));
  }, [activeCategory, dispatch]);

  console.log(activeCategory);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if ((e.target as HTMLElement).textContent == "All") {
      setActiveCategory("All");
    } else {
      setActiveCategory((e.target as HTMLElement).textContent);
    }
  };

  return (
    <div className="pb-[5vh]">
      <div className="flex flex-wrap gap-2 lg:gap-[1vw]">
        <button
          onClick={handleClick}
          className={`${
            activeCategory == "All" ? "text-white bg-neutral-900" : "bg-white"
          }  text-body-sm  py-[1vh] lg:py-[2vh] px-[5vw] lg:px-[2vw] !rounded-full`}
        >
          All
        </button>
        {categories.map((list) => {
          return (
            <button
              key={list.slug}
              onClick={handleClick}
              className={`${
                activeCategory == list.name
                  ? "text-white bg-neutral-900"
                  : "bg-white"
              }  text-body-sm  py-[1vh] lg:py-[2vh] px-[5vw] lg:px-[2vw] !rounded-full`}
            >
              {list.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
