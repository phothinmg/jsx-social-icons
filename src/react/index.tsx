import React, { type JSX } from "react";
import { useEffect, useState } from "react";
import { getPathd } from "../icons/icons";
import type { JsxSocialIconProps } from "../types";

/**
 * Renders a social media icon as a JSX element with customizable properties.
 *
 * @param name - The name of the social media icon.
 * @param href - The URL the icon should link to.
 * @param target - The target attribute for the link.
 * @param fillColor - The color of the icon.
 * @param fillOpacity - The opacity of the icon.
 * @param className - Additional CSS class for styling.
 * @param size - The size of the icon.
 * @returns A JSX element representing the social media icon.
 */
const JsxSocialIcon = ({
  name,
  href = "#",
  target = "_blank",
  fillColor = "currentcolor",
  fillOpacity = 0.7,
  className = "",
  size = 24,
}: JsxSocialIconProps): JSX.Element => {
  const [pathd, setPathd] = useState<string>(() => getPathd(name));
  const [opacity, setOpacity] = useState<number>(fillOpacity);
  const [color, setColor] = useState<string>(fillColor);
  const [link, setLink] = useState<string>(href);
  const [tg, setTg] = useState<string>(target);
  const [cname, setCname] = useState<string>(className);
  const [sz, setSz] = useState<number>(size);

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

  return (
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
        <title>{name}</title>
        <path d={pathd} fill={color} fillOpacity={opacity} />
      </svg>
    </a>
  );
};

export default JsxSocialIcon;
