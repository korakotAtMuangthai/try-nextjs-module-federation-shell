/// <reference types="react" />
import "twin.macro";
export default function RemoteComponent({ text, color, }: {
    text?: string;
    color?: string;
}): import("react").JSX.Element;
