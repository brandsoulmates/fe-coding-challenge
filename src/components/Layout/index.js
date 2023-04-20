import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <main className="h-full bg-sky-600">
        <div className="mx-auto flex px-8 py-10 justify-center">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
