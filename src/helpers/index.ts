/**
 * Add a fixed delay so you can see the loading state
 *
 * @param promise
 * @returns
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function delayForIcon(promise: Promise<any>): Promise<any> {
	return new Promise((resolve) => setTimeout(() => resolve(promise), 2000));
}
