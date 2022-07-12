import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { LoginForm } from "./LoginForm";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should not submit with empty text field', () => {
    const onSubmit = jest.fn();

    act(() => {
        render(<LoginForm onSubmit={onSubmit} />, container);
    });

    act(() => {
        container
          .querySelector("button")
          .dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

    expect(onSubmit).toBeCalledTimes(0);
}); 

it('should not submit with invalid date', () => {
    const onSubmit = jest.fn();

    act(() => {
        render(<LoginForm defaultValue={'04/20'} onSubmit={onSubmit} />, container);
    });

    act(() => {
        container
          .querySelector("button")
          .dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

    expect(onSubmit).toBeCalledTimes(0);
}); 

it('should submit with valid date', () => {
    const onSubmit = jest.fn();

    act(() => {
        render(<LoginForm defaultValue={'04/20/1982'} onSubmit={onSubmit} />, container);
    });

    act(() => {
        container
          .querySelector("button")
          .dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

    expect(onSubmit).toBeCalledTimes(1);
}); 
