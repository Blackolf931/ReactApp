import {create} from "react-test-renderer";
import React from "react"
import Paginator from "./Paginator";


describe("paginator component tests", () =>{
    test("page count is 11 but should be showed only 5", () =>{
        const component = create(<Paginator count={10} pageSize={5}/>);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    })
})