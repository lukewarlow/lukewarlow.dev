import { scrollbarGutter, scrollbarWidth, scrollbarColor } from 'tailwind-scrollbar-utilities';
import { mediaQueries } from 'tailwind-mq';

export default {
	content: [
		'./index.html',
		'./src/**/*.ts',
		'./src/**/*.js',
		'./src/**/*.css',
	],
	theme: {
		extend: {
			colors: {
				'accent': 'AccentColor',
				'accent-text': 'AccentColorText',
				'active-text': 'ActiveText',
				'button-border': 'ButtonBorder',
				'button-face': 'ButtonFace',
				'button-text': 'ButtonText',
				'canvas': 'Canvas',
				'canvas-text': 'CanvasText',
				'field': 'Field',
				'field-text': 'FieldText',
				'gray-text': 'GrayText',
				'highlight': 'Highlight',
				'highlight-text': 'HighlightText',
				'link-text': 'LinkText',
				'mark': 'Mark',
				'mark-text': 'MarkText',
				'visited-text': 'VisitedText',
			}
		}
	},
	plugins: [
		scrollbarGutter(),
		scrollbarWidth(),
		scrollbarColor(),
		mediaQueries(),
	]
}
