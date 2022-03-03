import AdminLogin from "./AdminLogin";
import { fireEvent, render } from "@testing-library/react";
import Login from "./Login";

describe ("Login Button", ()=> {
    it("Login button render", ()=>{
        let {queryByTitle} = render(<AdminLogin />)
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
    })
    it("onClick", ()=> {
        let {queryByTitle} = render(<AdminLogin />)
        let btn = queryByTitle("loginBtn")
        fireEvent.click(btn)
    })
})

// describe ({""})
