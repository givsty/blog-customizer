import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { Select } from 'src/ui/select';
import { Option } from 'src/ui/select/Option';
import { Separator } from 'src/ui/separator';
import { StoryDecorator } from 'src/ui/story-decorator';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontFamilyOptions,
	OptionType,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	Options,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';

interface IArticleParamsFormProps {
	formToggleState: () => void;
	activeForm: boolean;
	createParam: (param: ArticleStateType) => void;
	param: ArticleStateType,
	resetParam: (param: ArticleStateType) => void;
	setParam (param: ArticleStateType): void
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {

	const [selectedType, setSelectedType] = useState<OptionType>(
		props.param.fontFamilyOption
	);
	const [selectedSize, setSelectedSize] = useState<OptionType>(
		props.param.fontSizeOption
	);
	const [selectedColor, setSelectedColor] = useState<OptionType>(
		props.param.fontColor
	);
	const [selectedBackground, setSelectedBackground] = useState<OptionType>(
		props.param.backgroundColor
	);
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(
		props.param.contentWidth
	);
	const submitForm = (e: React.FormEvent) => {
		props.createParam({
			fontFamilyOption: selectedType,
			fontSizeOption: selectedSize,
			fontColor: selectedColor,
			contentWidth: selectedWidth,
			backgroundColor: selectedBackground,
		})
		e.preventDefault();
	};

	const resetForm = () => {
		props.resetParam({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			contentWidth: defaultArticleState.contentWidth,
			backgroundColor: defaultArticleState.backgroundColor,
		});
		//Временный костыль!!!!!
		setSelectedSize(defaultArticleState.fontSizeOption)
	};
	return (
		<>
			<ArrowButton
				isOpen={props.activeForm}
				onClick={props.formToggleState}></ArrowButton>
			<aside
				className={`${styles.container} ${
					props.activeForm ? styles.container_open : ''
				}`}>
				<form className={`${styles.form}`} onSubmit={submitForm} onReset={resetForm}>
					<Text size={45} weight={800}>
						Задайте параметры
					</Text>
					<Select
						selected={selectedType}
						options={fontFamilyOptions}
						onChange={setSelectedType}
						title='Шрифты'
					/>
					<RadioGroup
						name=''
						options={fontSizeOptions}
						title='Размер шрифта'
						selected={selectedSize}
						onChange={setSelectedSize}
					/>
					<Select
						selected={selectedColor}
						onChange={setSelectedColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBackground}
						onChange={setSelectedBackground}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedWidth}
						onChange={setSelectedWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear'/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
