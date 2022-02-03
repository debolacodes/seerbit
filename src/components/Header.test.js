import { render, screen } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import Header from './Header';
import {shallow, } from 'enzyme';


describe("Shortcuts", () => {
    let wrapper;
    beforeEach(()=>{
    wrapper = shallow(<Header />)
    })

    test("The main Class exists", () => {
        expect(wrapper.find("div.header").length).toBe(1)
    });
    test("Width of header is 100%", () => {
        let headerElement = wrapper.find("div.header")
        console.log(headerElement.style)

        expect(wrapper.find("div.header").length).toBe(1)
    });
  })


// describe('Counter Testing', ()=>{
//   let wrapper;
//   beforeEach(()=>{
//     wrapper = shallow(<Header />)
//   })
//   test('Classname of Header is `header`', () => {
//     const headerWrapper = wrapper.find('.header');
//     console.log(headerWrapper)
//     assert.equal(headerWrapper.length, 1);
//   });

//   test('renders button with increment ', () => {
//     expect(wrapper.find('#increment-btn').text()).toBe("Increment")
//   });

//   test('renders initial value of state in a div ', () => {
//     expect(wrapper.find('#counter-value').text()).toBe("0")
//   });

//   test("render the click event of increment button", ()=>{
//     wrapper.find('#increment-btn').simulate('click');
//     expect(wrapper.find("#counter-value").text()).toBe("1")
//   })

//   test("render the click event of decrement button", ()=>{
//     wrapper.find('#increment-btn').simulate('click');
//     expect(wrapper.find("#counter-value").text()).toBe("1")
//     wrapper.find('#decrement-btn').simulate('click');
//     expect(wrapper.find("#counter-value").text()).toBe("0")
//   })

//   test("render the click event of decrement button", ()=>{
//     wrapper.find('#decrement-btn').simulate('click');
//     expect(wrapper.find("#counter-value").text()).toBe("0")
//   })


// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

