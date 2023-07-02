import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Canvas
                camera={{
                    fov: 64,
                    position: [50, 50, 50],
                }}
            >
                <Experience />
            </Canvas>
        </div>
    );
}

export default App;
