import React from "react";

export default function SoundPad() {
    const [playing, setPlaying] = React.useState(null);

    function playSound(src) {
        if (playing && playing.src === src) {
            playing.pause();
            setPlaying(null);
        } else {
            if (playing) {
                playing.pause();
            }
            const audio = new Audio(src);
            audio.play();
            setPlaying(audio);
        }
    }

    return (
        <div className="sound-pad-grid">
            <button onClick={() => playSound("/sounds/BTS.mp3")}>BTS</button>
            <button onClick={() => playSound("/sounds/RM.mp3")}>RM</button>
            <button onClick={() => playSound("/sounds/Jin.mp3")}>Jin</button>
            <button onClick={() => playSound("/sounds/suga.mp3")}>suga</button>
            <button onClick={() => playSound("/sounds/Jhope.mp3")}>Jhope</button>
            <button onClick={() => playSound("/sounds/Jimin.mp3")}>Jimin</button>
            <button onClick={() => playSound("/sounds/V.mp3")}>V</button>
            <button onClick={() => playSound("/sounds/JK.mp3")}>JK</button>
            <button onClick={() => playSound("/sounds/Jungkook.mp3")}>Jungkook</button>
        </div>
    );
}
