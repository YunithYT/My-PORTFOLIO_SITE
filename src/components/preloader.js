import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Box from '@mui/material/Box';
import './preloader.scss';

export default function Preloader() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      const tl = gsap.timeline();

      // Stroke drawing animation
      tl.fromTo(
        paths,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.inOut',
          stagger: 0.1,
        }
      );

      // Fill animation
      tl.to(
        paths,
        {
          fill: '#10e956',
          duration: 1,
          ease: 'power1.inOut',
        },
        '+=0.5' // Delay after stroke animation
      );
    }
  }, []);

  return (
    <Box className="anime">
      <div className="load">
        {/* --- SVG with a perfectly balanced 'I' --- */}
        <svg
          ref={svgRef}
          viewBox="0 0 1610 300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#10e956"
          strokeWidth="10"
        >
          {/* Y */}
          <path d="M50,70 L100,150 L150,70 H200 L125,174 V230 H75 V174 L0,70 H50 Z" />
          
          {/* U */}
          <path d="M250,70 V194.5 Q250,230 294.4,230 H405.6 Q450,230 450,194.5 V70 H394.4 V194.5 H305.6 V70 H250 Z" />
          
          {/* N */}
          <path d="M500,230 V70 H550 L650,170 V70 H700 V230 H650 L550,130 V230 H500 Z" />
          
          {/* I (Final refined width) */}
          <path d="M750,70 V230 H810 V70 H750 Z" />
          
          {/* T (Repositioned) */}
          <path d="M860,70 V105.6 H932.2 V230 H987.8 V105.6 H1060 V70 H860 Z" />
          
          {/* H (Repositioned) */}
          <path d="M1110,70 V230 H1165.6 V158.9 H1254.4 V230 H1310 V70 H1254.4 V141.1 H1165.6 V70 H1110 Z" />
          
          {/* K (Repositioned) */}
          <path d="M1360,70 V230 H1415.6 V158.9 L1504.4,230 H1560 L1460,150 L1560,70 H1504.4 L1415.6,141.1 V70 H1360 Z" />
        </svg>
      </div>
    </Box>
  );
}
