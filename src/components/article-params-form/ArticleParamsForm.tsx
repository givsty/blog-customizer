import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontFamilyOptions,
	OptionType,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import clsx from 'clsx';
import { useClose } from 'src/ui/select/hooks/useClose';

interface IArticleParamsFormProps {
	setParam(param: ArticleStateType): void;
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
	const [activeForm, setActiveForm] = useState<boolean>(false);
  const createParam = (param: ArticleStateType) => props.setParam({ ...param });
  const formToggleState = () => setActiveForm(!activeForm);
	const formClose = () => setActiveForm(false)
  const resetParam = (param: ArticleStateType) => props.setParam({ ...param });
	const ref = useRef<HTMLDivElement>(null)

	const closeForm = useClose({
		isOpen: activeForm, 
		rootRef: ref,
		onClose: formClose
	})

	const [selectedType, setSelectedType] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedSize, setSelectedSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [selectedColor, setSelectedColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBackground, setSelectedBackground] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const submitForm = (e: React.FormEvent) => {
		createParam({
			fontFamilyOption: selectedType,
			fontSizeOption: selectedSize,
			fontColor: selectedColor,
			contentWidth: selectedWidth,
			backgroundColor: selectedBackground,
		});
		e.preventDefault();
	};

	const resetForm = () => {
		resetParam({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			contentWidth: defaultArticleState.contentWidth,
			backgroundColor: defaultArticleState.backgroundColor,
		});

		setSelectedType(defaultArticleState.fontFamilyOption);
		setSelectedSize(defaultArticleState.fontSizeOption);
		setSelectedColor(defaultArticleState.fontColor);
		setSelectedBackground(defaultArticleState.backgroundColor);
		setSelectedWidth(defaultArticleState.contentWidth);
	};
	return (
		<>
			<ArrowButton
				isOpen={activeForm}
				onClick={formToggleState}></ArrowButton>
			<aside
				onClick={()=> closeForm}
				ref={ref}
				className={clsx(styles.container, {
					[styles.container_open]: activeForm
				})}>
				<form
					className={`${styles.form}`}
					onSubmit={submitForm}
					onReset={resetForm}
					onClick={(e) => e.stopPropagation()}>
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
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
