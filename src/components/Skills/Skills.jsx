import React, { useRef, useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Clean up observer
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-container" ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <ul>
        <li>
          <h3>Html</h3>
          <span className="bar">
            <span className={isVisible ? "html animation" : "html"}></span>
          </span>
        </li>
        <li>
          <h3>css</h3>
          <span className="bar">
            <span className={isVisible ? "css animation" : "css"}></span>
          </span>
        </li>
        <li>
          <h3>react</h3>
          <span className="bar">
            <span className={isVisible ? "react animation" : "react"}></span>
          </span>
        </li>
        <li>
          <h3>mongodb</h3>
          <span className="bar">
            <span className={isVisible ? "mongodb animation" : "mongodb"}></span>
          </span>
        </li>
        <li>
          <h3>express</h3>
          <span className="bar">
            <span className={isVisible ? "express animation" : "express"}></span>
          </span>
        </li>
        <li>
          <h3>laravel</h3>
          <span className="bar">
            <span className={isVisible ? "laravel animation" : "laravel"}></span>
          </span>
        </li>
      </ul>
    </section>
    
  );
}

export default Skills;
