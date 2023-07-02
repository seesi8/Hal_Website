import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col ${
                props.end
                    ? "justify-end"
                    : props.start
                    ? "justify-start"
                    : "justify-center"
            } p-10 relative ${props.right ? "items-end" : "items-start"} `}
            style={{
                opacity: props.opacity,
            }}
        >
            <div className=" flex items-center justify-center">
                <div className="max-w-full w-full">
                    <div className="section  rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Overlay = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
        setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4));
        setOpacityThirdSection(scroll.curve(2 / 4, 1 / 4));
        setOpacityLastSection(scroll.range(3 / 4, 1 / 4));
    });

    return (
        <Scroll html>
            <div class="w-screen section">
                <Section opacity={opacityFirstSection}>
                    <h1 className="font-semibold font-rubik section-title">
                        Welcoming
                        <br />
                        New Innovation
                    </h1>
                </Section>
                <Section right opacity={opacitySecondSection} end>
                    <img src="icons.png" alt="" className="icons" />
                    <h1 className="font-semibold font-rubik text-right section-title">
                        Compatible
                        <br />
                        with everything you own
                    </h1>
                </Section>
                <Section end opacity={opacityThirdSection}>
                    <img src="outline.png" alt="" className="outlineImage" />
                    <h1 className="font-semibold font-rubik section-title">
                        Redefining
                        <br />
                        Voice Assistant
                    </h1>
                </Section>
                <Section start right opacity={opacityLastSection}>
                    <h1 className="font-semibold font-rubik section-title text-right">
                        The Ballbert
                        <br />
                        Voice Assistant
                    </h1>
                </Section>
            </div>
        </Scroll>
    );
};
