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
} from 'src/constants/articleProps';

interface IArticleParamsFormProps {
	formToggleState: () => void;
	activeForm: boolean;
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
	const [selectedType, setSelectedType] = useState<OptionType>({
		value: 'Open Sans',
		title: 'Open Sans',
		className: 'Open Sans',
	});
	const [selectedSize, setSelectedSize] = useState<OptionType>({
		value: '18px',
		title: '18px',
		className: '18px',
	});
	const [selectedColor, setSelectedColor] = useState<OptionType>({
		value: 'Черный',
		title: 'Черный',
		className: 'Черный',
		optionClassName: 'option-black'
	});
	const [selectedBackground, setSelectedBackground] = useState<OptionType>({
		value: 'Белый',
		title: 'Белый',
		className: 'Белый',
		optionClassName: 'option-white'
	});
	const [selectedWidth, setSelectedWidth] = useState<OptionType>({
		value: 'Широкий',
		title: 'Широкий',
		className: 'Широкий',
		optionClassName: 'option-wide'
	});

	const submitForm = (e: React.FormEvent) => {
		console.log('применить');
		console.log(selectedType);
		console.log(selectedSize);
		console.log(selectedColor)
		console.log(selectedType)
		console.log(selectedWidth)
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
							onClick={() => console.log('сброс')}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
