import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '../../src/App'


afterEach(cleanup)

it("renders", () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
})