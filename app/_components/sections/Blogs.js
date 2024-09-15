"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: "blog-1",
    title: "useState in React",
    tags: ["React.js", "Next.js", "Frontend"],
    image: "avatar-01.jpg",
  },
  {
    id: "Bug in React Due to Closure",
    title: "Example of A Closure Error in React",
    tags: ["useState", "React.js", "Closure"],
    image: "wild-oasis-client.png",
  },
  {
    id: "blog-3",
    title: "React Query",
    tags: ["React.js", "Next.js", "Tenstack"],
    image: "avatar-01.jpg",
  },
  {
    id: "blog-4",
    title: "Hooks in React",
    tags: ["React.js", "Next.js", "Hooks"],
    image: "avatar-01.jpg",
  },
];

function Blogs() {
  const component = useRef(null);
  const itemsRef = useRef([]);

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const urlPrefix = "/blog"; // Assuming it's always for blogs now

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
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
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
  }, [hovering, currentItem]);

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
  }, []);

  return (
    <div ref={component} className="mx-auto my-16 w-[80%]">
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
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label={item.title}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                Read more <MdArrowOutward />
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

export default Blogs;
