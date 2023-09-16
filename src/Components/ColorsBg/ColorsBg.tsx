import React from 'react';
import './ColorsBg.scss';

const ColorsBg = () => {

    return (
        <div className="colors-bg">
            <svg id="colors" width="390" height="484" viewBox="0 0 390 484" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_0_1)">
                    <circle cx="211.5" cy="225.5" r="102.5" fill="url(#paint0_radial_0_1)" fill-opacity="0.5" />
                </g>
                <g filter="url(#filter1_f_0_1)">
                    <circle cx="211.5" cy="291.5" r="80.5" fill="#F8503E" fill-opacity="0.6" />
                </g>
                <g filter="url(#filter2_f_0_1)">
                    <circle cx="145" cy="203" r="80" fill="#3FD5CF" />
                </g>
                <defs>
                    <filter id="filter0_f_0_1" x="-3" y="11" width="429" height="429" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur_0_1" />
                    </filter>
                    <filter id="filter1_f_0_1" x="19" y="99" width="385" height="385" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur_0_1" />
                    </filter>
                    <filter id="filter2_f_0_1" x="-58" y="0" width="406" height="406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_0_1" />
                    </filter>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.948 181.471) rotate(45) scale(109.589)">
                        <stop offset="1" stop-color="#FAB32D" />
                    </radialGradient>
                </defs>
            </svg>
            <svg>
  <filter id="wavy2">
    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>
        </div>
    );
}

export default ColorsBg;