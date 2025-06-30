import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	OptionType,
	ArticleStateType,
	Options,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [activeForm, setActiveForm] = useState(false);
	const [param, setParam] = useState<Options>({
		font: defaultArticleState.fontFamilyOption,
		size: defaultArticleState.fontSizeOption,
		color: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.contentWidth,
		width: defaultArticleState.backgroundColor,
	})
	
	const createParam = (param: Options) => setParam({...param})
	const formToggleState = () => setActiveForm(!activeForm);
	
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': param.font.value,
					'--font-size': param.size.value,
					'--font-color': param.color.value,
					'--container-width': param.width.value,
					'--bg-color': param.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				formToggleState={formToggleState}
				activeForm={activeForm}
				createParam={createParam}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
