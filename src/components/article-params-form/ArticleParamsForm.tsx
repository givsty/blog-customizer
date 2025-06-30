import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
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
} from 'src/constants/articleProps';

interface IArticleParamsFormProps {
	formToggleState: () => void;
	activeForm: boolean;
	createParam: (param: Options)=> void
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
	const [selectedType, setSelectedType] = useState<OptionType>(defaultArticleState.fontFamilyOption);
	const [selectedSize, setSelectedSize] = useState<OptionType>(defaultArticleState.fontSizeOption);
	const [selectedColor, setSelectedColor] = useState<OptionType>(defaultArticleState.fontColor);
	const [selectedBackground, setSelectedBackground] = useState<OptionType>(defaultArticleState.contentWidth);
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(defaultArticleState.backgroundColor);

	const submitForm = (e: React.FormEvent) => {
		props.createParam({
			font: selectedType,
			size: selectedSize,
			color: selectedColor,
			backgroundColor: selectedColor,
			width: selectedWidth
		});
		e.preventDefault();
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
				<form className={styles.form} onSubmit={submitForm}>
					<Text size={12}>Задайте параметры</Text>
					<Select
						selected={selectedType}
						options={fontFamilyOptions}
						onChange={setSelectedType}
						title='Шрифты'
					/>
					<RadioGroup
						name='afaf'
						options={fontSizeOptions}
						title='Размер шрифта'
						selected={selectedSize}
						onChange={setSelectedSize}
					/>
					<Select
						placeholder='141'
						selected={selectedColor}
						onChange={setSelectedColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Select
						placeholder='qwrqr'
						selected={selectedBackground}
						onChange={setSelectedBackground}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						placeholder='afsafsaff'
						selected={selectedWidth}
						onChange={setSelectedWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
