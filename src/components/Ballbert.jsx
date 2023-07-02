import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef } from "react";

export function Ballbert(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./models/ballbert.glb");
    const { actions } = useAnimations(animations, group);

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            rotation={[0, Math.PI / 1.9, 0]}
        >
            <group name="Scene">
                <group
                    name="lid"
                    position={[2.478, 26.747, 1.049]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={0.164}
                >
                    <mesh
                        name="lid_1"
                        geometry={nodes.lid_1.geometry}
                        material={materials["Material.001"]}
                    />
                    <mesh
                        name="lid_2"
                        geometry={nodes.lid_2.geometry}
                        material={materials["Material.002"]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./models/ballbert.glb");
