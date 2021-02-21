import React from 'react'
import {Home} from './Home'
import { render}  from '@testing-library/react'

describe("Home", () => {
    it("render correctly", () => {
        const { getByLabelText } = render(<Home />)

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
    })
})