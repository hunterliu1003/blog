import StoryCentered from '@/components/StoryCentered'

export default function (storyFn) {
	const TheStory = storyFn()
	return {
		components: { 
			StoryCentered,
			TheStory
		},
		template: `<StoryCentered><TheStory></TheStory></StoryCentered>`
	}
}