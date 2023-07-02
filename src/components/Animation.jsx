import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll } from "@react-three/drei";
import { Ballbert } from "./Ballbert";
import { Sparkles } from "./Sparkles";

const MAX_FLOOR = 4;
let CURRENT_FLOOR = 0;
const FLOORS = Array.from(
    { length: MAX_FLOOR - CURRENT_FLOOR },
    (_, i) => (1 / (MAX_FLOOR - CURRENT_FLOOR)) * (i + 1)
);

export const Animation = () => {
    const scroll = useScroll();

    const [updatedScroll, setUpdatedScroll] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useFrame(() => {
        let current_scroll = scroll.offset;

        CURRENT_FLOOR = FLOORS.findIndex((floor) => current_scroll <= floor);

        setUpdatedScroll(
            (current_scroll - CURRENT_FLOOR / MAX_FLOOR) * MAX_FLOOR
        );
    });

    const [isVertical, setIsVertical] = useState(false);
    const ref = useRef(null);

    useFrame(() => {
        if (window.innerHeight && window.innerWidth) {
            setIsVertical(window.innerHeight > window.innerWidth);

            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    });

    return (
        <group ref={ref}>
            {CURRENT_FLOOR == 0 ? (
                <>
                    <Sparkles
                        position={[updatedScroll * 100 + 30, 25, 13]}
                        scale={[14, 8, 10]}
                    />
                </>
            ) : CURRENT_FLOOR >= 3 ? (
                isVertical ? (
                    <Ballbert
                        position={[
                            updatedScroll * 225 - 200,
                            updatedScroll * -30 + 20,
                            updatedScroll * -52 + 70,
                        ]}
                        scale={[
                            (width / height) * 0.9 + 0.3,
                            (width / height) * 0.9 + 0.3,
                            (width / height) * 0.9 + 0.3,
                        ]}
                    />
                ) : (
                    // <Ballbert
                    //     position={[25, -10, 18]}
                    //     scale={[
                    //         (width / height) * 0.9 + 0.3,
                    //         (width / height) * 0.9 + 0.3,
                    //         (width / height) * 0.9 + 0.3,
                    //     ]}
                    // />
                    // <Ballbert position={[30, -10, 18]} />
                    <Ballbert
                        position={[
                            updatedScroll * 210 - 200,
                            updatedScroll * -20 + 20,
                            updatedScroll * -40 + 70,
                        ]}
                    />
                )
            ) : (
                <></>
            )}
        </group>
    );
};
