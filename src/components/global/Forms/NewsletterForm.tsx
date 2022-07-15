import React, { useCallback, useMemo, useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { ButtonSecondary } from "../Button"
import { TextField } from "../FormsElements"

interface NewsletterFormProps {
    onSubmit: (error: boolean) => void
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
    const [showSubmissionError, setShowSubmissionError] = useState(false)

    const initialValues = useMemo(
        () => ({
            email: "",
        }),
        []
    )

    const validationSchema = useMemo(
        () =>
            Yup.object({
                email: Yup.string()
                    .email("Incorrect format")
                    .required("required"),
            }),
        []
    )

    const onkeyUpHandler = useCallback((e, callBack) => {
        if (e.key === "Enter") {
            callBack()
        }
    }, [])

    const handleSubmit = useCallback(async (values) => {
        await axios
            .post(
                "https://hook.integromat.com/zf1aqmh8bbdgbklx9sfask9fvrqyqerq",
                values,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.GATSBY_INTEGROMAT_TOKEN}`,
                    },
                }
            )
            .then(() => {
                onSubmit(true)
            })
            .catch(() => {
                onSubmit(false)
                setShowSubmissionError(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formik) => {
                return (
                    <div className="relative">
                        <form
                            onSubmit={formik.handleSubmit}
                            className="flex gap-[12px] flex-col md:flex-row"
                        >
                            <div className="w-full lg:max-w-[550px]">
                                <TextField
                                    name="email"
                                    placeholder="Email Address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    error={
                                        formik.touched.email
                                            ? formik.errors.email
                                            : undefined
                                    }
                                    onKeyUp={(e) =>
                                        !formik.isSubmitting &&
                                        onkeyUpHandler(e, formik.submitForm)
                                    }
                                />
                            </div>
                            <ButtonSecondary
                                type="submit"
                                disabled={formik.isSubmitting}
                            >
                                Subscribe
                            </ButtonSecondary>
                        </form>
                        {showSubmissionError && (
                            <span className="text-punkz-blue-1">
                                An error occurred, please try again later
                            </span>
                        )}
                    </div>
                )
            }}
        </Formik>
    )
}

export default NewsletterForm
