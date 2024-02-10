import { handleEnterKeyPress } from '@/utils/front/others'
import { Form } from 'formik'
import React from 'react'

export function MyCustomFormikForm({ children }) {
    return (
        <Form onKeyDown={handleEnterKeyPress}>{children}</Form>
    )
}

export default MyCustomFormikForm
