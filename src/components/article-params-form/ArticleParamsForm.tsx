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
	const [value, setValue] = useState<OptionType | null>(null);
	const selectFont = (value: OptionType): OptionType => {
		return value;
	};

	return (
		<>
			<ArrowButton
				isOpen={props.activeForm}
				onClick={props.formToggleState}></ArrowButton>
			<aside className={`${styles.container} ${props.activeForm ? styles.container_open : ''}`}>
				<form className={styles.form}>
					<Text size={12}>Задайте параметры</Text>
					<Select
						placeholder='шрифты'
						selected={value}
						onChange={() => ''}
						options={fontFamilyOptions}
						title='123'
					/>
					<RadioGroup
						name='afaf'
						options={fontSizeOptions}
						onChange={() => ''}
						title='Размер шрифта'
						selected={{
							title: '',
							value: '',
							className: '',
							optionClassName: undefined,
						}}
					/>
					<Select
						placeholder='141'
						selected={value}
						onChange={() => ''}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Select
						placeholder='qwrqr'
						selected={value}
						onChange={() => ''}
						options={contentWidthArr}
						title='Цвет фона'
					/>
					<Select
						placeholder='afsafsaff'
						selected={value}
						onChange={() => ''}
						options={backgroundColors}
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
