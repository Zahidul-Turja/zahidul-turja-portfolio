"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function ContentList({ items, pageType, yCal = 160 }) {
  const component = useRef(null);
  const itemsRef = useRef([]);

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const urlPrefix = `/${pageType}`; // Assuming it's always for blogs now

  useEffect(() => {
    // Animate list items with a stagger effect
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });

      return () => ctx.revert(); // Cleanup
    }, component);
  }, []);

  useEffect(() => {
    // Mouse move event listener for hover reveal
    const handleMouseMove = (e) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - yCal),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // Cleanup
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem, yCal]);

  const onMouseEnter = (index) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  // Preload images
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  return (
    <div ref={component} className="-z-10 mx-auto my-16 w-full md:w-[80%]">
      <ul
        className="grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
      >
        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="list-item opacity-0"
            onMouseEnter={() => onMouseEnter(index)}
          >
            <Link
              href={urlPrefix + "/" + item.id}
              className="flex flex-col justify-between border-t border-t-slate-100 py-6 text-slate-200 md:flex-row md:py-10"
              aria-label={item.title}
            >
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold md:text-3xl">
                  {item.title}
                </span>
                <div className="flex gap-3 text-yellow-400">
                  {item.tags.map(
                    (tag, i) =>
                      i < 4 && (
                        <span
                          key={i}
                          className="text-base font-bold md:text-lg"
                        >
                          {tag}
                        </span>
                      ),
                  )}
                </div>
              </div>
              <span className="my-4 ml-0 flex items-center gap-2 text-base font-medium md:ml-0 md:text-xl">
                {pageType === "blogs" ? (
                  <>
                    Read more <MdArrowOutward />
                  </>
                ) : (
                  <>
                    Details <MdArrowOutward />
                  </>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hover element */}
      <div
        className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
        style={{
          backgroundImage:
            currentItem !== null ? `url(${items[currentItem].image})` : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
}

export default ContentList;
