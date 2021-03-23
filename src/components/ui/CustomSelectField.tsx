import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from "@material-ui/core"
import { FieldInputProps } from "formik"
import * as React from "react"

type IProps = SelectProps & {
    errorMessage?: string;
    field: FieldInputProps<string>;
    isTouched?: boolean;
    selectOptions: string[]
};

export const CustomSelectField = ({
	style,
	label,
	required,
	errorMessage,
	field,
	isTouched,
	selectOptions,
	...props
}: IProps) => {
	const showError = isTouched && !!errorMessage

	return (
		<FormControl error={showError} style={style} fullWidth>
			<InputLabel>{required ? `${label} *` : label}</InputLabel>
			<Select
				value={field.value}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				fullWidth
				error={showError}
				margin="dense" 
				aria-label={props["aria-label"]}
			>
				{selectOptions.map((value, key) => {
					return (
						<MenuItem value={value} key={key}>{value}</MenuItem>
					)
				})}
			</Select>
			<FormHelperText
				style={{
					color: "#f00",
					display: "block",
					minHeight: 18,
					width: "100%",
					marginTop: 4,
					marginBottom: 10,
					fontSize: 12,
				}}
			>
				{showError && errorMessage}
			</FormHelperText>
		</FormControl>
	)
}