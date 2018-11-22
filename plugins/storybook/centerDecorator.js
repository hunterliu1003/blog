export default function (storyFn) {
	const story = storyFn()
	return {
		component: { story },
		template: `<StoryCentered><story></story></StoryCentered>`
	}
}