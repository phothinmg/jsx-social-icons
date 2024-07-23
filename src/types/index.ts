export interface Icons {
	name:
		| ""
		| "github"
		| "blogger"
		| "gitlab"
		| "gitbook"
		| "codepen"
		| "codesandbox"
		| "hashnode"
		| "twitter-X"
		| "facebook"
		| "discord"
		| "linkedin"
		| "line"
		| "dev-to"
		| "medium"
		| "slack"
		| "stackoverflow"
		| "stack-edit"
		| "messenger"
		| "viber"
		| "telegram"
		| "whatsapp"
		| "wechat"
		| "youtube"
		| "wordpress";
	d: string;
}

export interface JsxSocialIconProps {
	name: Icons["name"];
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
	className?: string;
	size?: number;
	fillColor?: string;
	fillOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}
