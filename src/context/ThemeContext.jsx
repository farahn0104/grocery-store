'use client'
import { useState } from "react"
import { MyContext } from "./ThemeProvider"

const ThemeProvider = ({ children }) => {
    const [isOpenAddressBox, setIsOpenAddressBox] = useState(false)

    const isOpenAddressPanel = () => {
        setIsOpenAddressBox(!isOpenAddressBox) // ✅ Uncomment karo
    }

    const openAddressPanel = () => {
        setIsOpenAddressBox(true) // ✅ Alag function banaya
    }

    const closeAddressPanel = () => {
        setIsOpenAddressBox(false) // ✅ Alag function banaya
    }

    const values = {
        setIsOpenAddressBox,
        isOpenAddressBox,
        isOpenAddressPanel,
        openAddressPanel,
        closeAddressPanel
    }

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default ThemeProvider