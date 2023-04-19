import React from "react"
import { render } from "@testing-library/react"

import Layout from "."

describe('Layout component', () => {
  it('renders the test correctly', () => {
    const result = render(
      <Layout>
        <div>Layout test</div>
      </Layout>
    )
    expect(result).toMatchSnapshot()
  })
})
