import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SearchInput from '@components/SearchInput/index'

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn().mockReturnValue({ query: 'test' })
}))

afterEach(cleanup)

it("renders search panel", () => {
    const { asFragment } = render(<SearchInput />)
    expect(asFragment(<SearchInput />)).toMatchSnapshot()
})