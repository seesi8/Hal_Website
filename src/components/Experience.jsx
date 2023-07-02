import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { Animation } from "./Animation";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={100} position={[40, 40, 40]} />
            <pointLight intensity={100} position={[50, 50, 40]} />
            <ScrollControls pages={4} damping={0.25}>
                <Animation />
                <Overlay />
            </ScrollControls>
        </>
    );
};
