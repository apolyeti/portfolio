export default function Circle() {
    return (
        <svg width="500px" height="500px" viewBox="0 0 160 160" className="z-20">
            <defs>
                <g id="lines" style={{ stroke: "black" }}>
                    <line x1=" 71" x2=" 79" />
                    <line x1="-71" x2="-79" />
                    <line y1=" 71" y2=" 79" />
                    <line y1="-71" y2="-79" />
                </g>
            </defs>
            <g transform="translate(80 80)">
                <use xlinkHref="#lines" transform="rotate( 0)" />
                <use xlinkHref="#lines" transform="rotate( 5)" />
                <use xlinkHref="#lines" transform="rotate(10)" />
                <use xlinkHref="#lines" transform="rotate(15)" />
                <use xlinkHref="#lines" transform="rotate(20)" />
                <use xlinkHref="#lines" transform="rotate(25)" />
                <use xlinkHref="#lines" transform="rotate(30)" />
                <use xlinkHref="#lines" transform="rotate(35)" />
                <use xlinkHref="#lines" transform="rotate(40)" />
                <use xlinkHref="#lines" transform="rotate(45)" />
                <use xlinkHref="#lines" transform="rotate(50)" />
                <use xlinkHref="#lines" transform="rotate(55)" />
                <use xlinkHref="#lines" transform="rotate(60)" />
                <use xlinkHref="#lines" transform="rotate(65)" />
                <use xlinkHref="#lines" transform="rotate(70)" />
                <use xlinkHref="#lines" transform="rotate(75)" />
                <use xlinkHref="#lines" transform="rotate(80)" />
                <use xlinkHref="#lines" transform="rotate(85)" />
            </g>
        </svg>
    )
}