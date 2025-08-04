// src/TextType.jsx
"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";
import "./TextType.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [sentence, setSentence] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor]);

  useEffect(() => {
    const fullText = Array.isArray(text) ? text[sentence % text.length] : text;
    let timeout;

    if (deleting) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, index - 1));
          setIndex(index - 1);
        }, 30);
      } else {
        setDeleting(false);
        setSentence((s) => (s + 1) % text.length);
      }
    } else {
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, sentence, text, typingSpeed, pauseDuration]);

  return createElement(
    Component,
    { className: "text-type" },
    <>
      {displayedText}
      {showCursor && <span ref={cursorRef} className="text-type__cursor">{cursorCharacter}</span>}
    </>
  );
};

export default TextType;
