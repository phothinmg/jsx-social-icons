// biome-ignore lint/style/useImportType: <explanation>
import React, {Suspense, useEffect, useState } from "react";
import type { IconName, Icons } from "./icons.js";
import { icons } from "./icons.js";

interface JsxSocialIconProps {
  /**
   * ```
   * 'Name of icon'
   * ```
   */
  name: Icons["name"];
  // Anchor Element
  /**
   * ```
   * 'HTML Anchor Element Attribute "href"'
   * ```
   *
   * ```html
   * <a href=""></a>
   *
   * ```
   */
  href?: string;
  /**
   * ```
   * 'HTML Anchor Element Attribute "target"'
   * ```
   *
   * ```html
   * <a href="" target=""></a>
   *
   * ```
   */
  target?: "_blank" | "_parent" | "_self" | "_top";
  /**
   * ```
   * 'HTML Anchor Element `className`'
   * ```
   *
   * ```
   * 'Default style - {textDecoration: none, color: currentcolor }'
   * ```
   *
   * ```html
   *
   * <a href="" target="" className=""></a>
   *
   * ```
   */
  className?: string;
  // Icon
  /**
   * ```
   * 'Size for icon - default - 24'
   * ```
   */
  size?: number;
  /**
   * ```
   * 'Color for icon - default - "currentcolor"'
   * ```
   */
  fillColor?: string;
  /**
   * ```
   * 'Opacity of icon. 0.1 to 1 > default 0.7'
   * ```
   */
  fillOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  /**
   * ```
   * 'Tooltip text for icon. default name of icon .'
   * ```
   *
   *
   */
  title?: string;
}

const getPathd = (name: IconName): string => {
  const pd = icons.find((i) => i.name === name) as Icons;
  return pd.d;
};

export default function ReactSocialIcon({
  name,
  href = "#",
  target = "_blank",
  fillColor = "currentcolor",
  fillOpacity = 0.7,
  className = "",
  size = 24,
  title = name,
}: JsxSocialIconProps): React.JSX.Element {
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
