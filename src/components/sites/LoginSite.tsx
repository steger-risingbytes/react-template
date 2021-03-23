import { Button } from "@material-ui/core"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import * as React from "react"
import { CustomInputField } from "../ui/CustomInputField"
import { useAPI } from "../../network/API"
import Logo from "../../assets/images/RB-logo.svg"
import { useErrorAction } from "../../stores/errorStore"

interface ILoginValues {
    email: string
    password: string
}

export function LoginSite() {
	const { PostAuthLogin } = useAPI()
	const { toggleNetworkError } = useErrorAction()

	const submit = async (model: ILoginValues) => {
		try {
			await PostAuthLogin(model.email, model.password)
		}
		catch(err) {
			toggleNetworkError("Network Unreachable", 6000)
		}
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				flexGrow: 1,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "50% 0%",
				padding: 24,
			}}
		>
			<img src={Logo} style={{ maxWidth: 200 }}/>
			<div
				style={{
					background: "#fff",
					borderRadius: 4,
					width: "100%",
					maxWidth: 320,
					marginTop: 40,
				}}
			>
				<div
					style={{
						background: "#0a4479",
						color: "#fff",
						textTransform: "uppercase",
						padding: 24,
						borderTopLeftRadius: 4,
						borderTopRightRadius: 4,
						fontWeight: "bold",
					}}
				>
                    Log In
				</div>

				<div 
					style={{ 
						padding: 24, 
						border: "1px solid #0a4479", 
						borderTop: "none" 
					}}
				>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						onSubmit={submit}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.email("Ungültiger Wert")
								.required("Dieses ist ein Pflichtfeld")
								.trim(),
							password: Yup.string()
								.min(6, "Ungültiger Wert")
								.required("Dies ist ein Pflichtfeld"),
						})}
						validateOnBlur
					>
						{({ errors, touched, isSubmitting }) => (
							<Form>
								<Field
									component={CustomInputField}
									label="Email"
									name="email"
									type="email"
									required
									autoComplete="username"
									errorMessage={errors.email}
									isTouched={touched.email}
								/>
								<Field
									component={CustomInputField}
									label="Passwort"
									name="password"
									type="password"
									required
									autoComplete="current-password"
									errorMessage={errors.password}
									isTouched={touched.password}
								/>
								
								<Button
									variant="contained"
									style={{
										boxShadow: "none",
										borderRadius: 24,
										marginTop: 24,
									}}
									fullWidth
									disabled={isSubmitting}
									type="submit"
								>
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}