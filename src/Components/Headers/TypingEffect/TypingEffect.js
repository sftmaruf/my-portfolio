import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
    return (
        <ReactTypingEffect
            text = {["Software Engineer.", "Web Developer."]}
            speed = {200}
            eraseSpeed={200}
            eraseDelay = {2000}
            cursorRenderer = {cursor => <p>{cursor}</p>}
            displayTextRenderer={(text, i) => {
                return (
                    <h5>
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span
                                    key={key}
                                >{char}</span>
                            );
                        })}
                    </h5>
                );
            }}
        />
    );
};

export default TypingEffect;