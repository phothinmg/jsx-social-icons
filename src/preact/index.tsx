import { type JSX, h } from "preact";
import { Suspense } from "preact/compat";
import React from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { getPathd } from "../icons/icons";
import type { JsxSocialIconProps } from "../types";

export default function PreactSocialIcon({
	name,
	href = "#",
	target = "_blank",
	fillColor = "currentcolor",
	fillOpacity = 0.7,
	className = "",
	size = 24,
	title = name,
}: JsxSocialIconProps): JSX.Element {
	const [pathd, setPathd] = useState<string>(() => getPathd(name));
	const [opacity, setOpacity] = useState<number>(fillOpacity);
	const [color, setColor] = useState<string>(fillColor);
	const [link, setLink] = useState<string>(href);
	const [tg, setTg] = useState<string>(target);
	const [cname, setCname] = useState<string>(className);
	const [sz, setSz] = useState<number>(size);
	const [tit, setTitle] = useState<string>(title);
	useEffect(() => {
		setPathd(getPathd(name));
	}, [name]);
	useEffect(() => {
		setOpacity(fillOpacity);
	}, [fillOpacity]);
	useEffect(() => {
		setColor(fillColor);
	}, [fillColor]);
	useEffect(() => {
		setLink(href);
	}, [href]);
	useEffect(() => {
		setTg(target);
	}, [target]);
	useEffect(() => {
		setCname(className);
	}, [className]);
	useEffect(() => {
		setSz(size);
	}, [size]);
	useEffect(() => {
		setTitle(title);
	}, [title]);
	return (
		<Suspense fallback={<p>Loading</p>}>
			<a
				href={link}
				style={{ textDecoration: "none", color: "currentcolor" }}
				className={cname}
				target={tg}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={sz}
					height={sz}
				>
					<title>{tit}</title>
					<path d={pathd} fill={color} fillOpacity={opacity} />
				</svg>
			</a>
		</Suspense>
	);
}
