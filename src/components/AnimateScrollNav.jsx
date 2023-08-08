import React, { useEffect, useState, useRef } from "react";

const AnimateScrollNav = () => {
  const [scrollState, setScrollState] = useState(0);
  const [visibleElemntIndex, setVisibleElemntIndex] = useState(0);

  const inputsRef = useRef([]);

  const handleScroll = (event) => {
    const scrollT = event.target.scrollTop;
    setScrollState(scrollT);
  };

  const handleObserv = (entries, observer) => {
    const visibleSection = entries.find((section) => section.isIntersecting);
    if (visibleSection) {
      const indexOfSection = inputsRef.current.indexOf(visibleSection.target);
      setVisibleElemntIndex(indexOfSection);
    }

    // اضافه کردن راه‌اندازی Observer مجدد به عناصر غیرقابل‌مشاهده
    // entries.forEach((entry) => {
    //   if (!entry.isIntersecting) {
    //     observer.observe(entry.target);
    //   }
    // });
  };

  useEffect(() => {
    const options = {
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserv, options);
    inputsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      onScroll={handleScroll}
      className="max-w-7xl mx-auto px-4"
      style={{ overflow: "scroll", height: "100px" }}
    >
      <ul
        dir="rtl"
        className={
          scrollState >= 33
            ? "w-full flex justify-between items-center py-2 font-body sticky top-0 left-0 transition-all duration-500 bg-red-500 backdrop-blur-md bg-opacity-50"
            : "w-full flex justify-between items-center py-2 font-body sticky top-0 left-0 transition-all duration-500 bg-transparent"
        }
      >
        <a
          href="#fasl"
          className={
            visibleElemntIndex === 0
              ? "text-3xl transition-all duration-500 font-normal font-body"
              : "text-xl transition-all duration-500 font-extrabold font-body"
          }
        >
          سرفصل ها
        </a>
        <a
          href="#tozih"
          className={
            visibleElemntIndex === 1
              ? "text-3xl transition-all duration-500 font-normal font-body"
              : "text-xl transition-all duration-500 font-extrabold font-body"
          }
        >
          توضیحات
        </a>
        <a
          href="#tanzimat"
          className={
            visibleElemntIndex === 2
              ? "text-3xl transition-all duration-500 font-normal font-body"
              : "text-xl transition-all duration-500 font-extrabold font-body"
          }
        >
          تنظیمات
        </a>
        <a
          href="#soal"
          className={
            visibleElemntIndex === 3
              ? "text-3xl transition-all duration-500 font-normal font-body"
              : "text-xl transition-all duration-500 font-extrabold font-body"
          }
        >
          سوالات مرتبط
        </a>
      </ul>
      <div className="flex flex-col font-body" dir="rtl">
        <div
          id="fasl"
          data-index="0"
          ref={(element) => inputsRef.current.push(element)}
          className="mt-5 bg-red-100 h-80 p-2 rounded-lg"
        >
          <h1 className="text-2xl">سرفصل ها</h1>
        </div>
        <div
          id="tozih"
          data-index="1"
          ref={(element) => inputsRef.current.push(element)}
          className="mt-5 bg-red-100 h-80 p-2 rounded-lg"
        >
          <h1 className="text-2xl">توضیحات</h1>
        </div>
        <div
          id="tanzimat"
          data-index="2"
          ref={(element) => inputsRef.current.push(element)}
          className="mt-5 bg-red-100 h-80 p-2 rounded-lg"
        >
          <h1 className="text-2xl">تنظیمات</h1>
        </div>
        <div
          id="soal"
          data-index="3"
          ref={(element) => inputsRef.current.push(element)}
          className="mt-5 bg-red-100 h-80 p-2 rounded-lg"
        >
          <h1 className="text-2xl">سوالات مرتبط</h1>
        </div>
      </div>
    </div>
  );
};

export default AnimateScrollNav;
