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
	const [param, setParam] = useState<ArticleStateType>(defaultArticleState)

	const createParam = (param: ArticleStateType) => setParam({...param})
	const formToggleState = (value?: boolean) => setActiveForm(!activeForm);
	const resetParam = (param:ArticleStateType) => setParam({...param})
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': param.fontFamilyOption.value,
					'--font-size': param.fontSizeOption.value,
					'--font-color': param.fontColor.value,
					'--container-width': param.contentWidth.value,
					'--bg-color': param.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setParam={setParam}
				formToggleState={formToggleState}
				activeForm={activeForm}
				createParam={createParam}
				param={param}
				resetParam={resetParam}
			/>
			<Article formToggleState={formToggleState}/>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
