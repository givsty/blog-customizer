
import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';


const App = () => {
  const [param, setParam] = useState<ArticleStateType>(defaultArticleState);
  return (
    <main
      className={styles.main}
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
      />
      <Article/>
    </main>
  );
};

export default App