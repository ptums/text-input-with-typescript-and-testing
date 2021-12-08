import React from "react";
import { screen, render } from "@testing-library/react";
import TextInput from "./TextInput";

let mockProps = {
  label: "test-input",
  handleOnChange: jest.fn(),
  value: "Hello!",
  placeHolder: "Text input here",
  type: "input",
};

describe("<TextInput />", () => {
  it('renders a text input with the value "Hello!"', () => {
    render(<TextInput {...mockProps} />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test\-input/i,
    });

    expect(input.value).toBe(mockProps.value);
  });

  it('renders a text input with the value "Good Day" after prop change', () => {
    render(<TextInput {...mockProps} value="Good Day" />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test\-input/i,
    });

    expect(input.value).toBe("Good Day");
    expect(input.value).not.toBe("Hello!");
  });

  it('renders the input element when the type prop is "input"', () => {
    const { container } = render(<TextInput {...mockProps} />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector(mockProps.type);
    expect(input).not.toBeNull();
    expect(container.querySelector("textarea")).toBeNull();
  });

  it("renders the correct element when the type prop is changed to textarea", () => {
    const { container } = render(<TextInput {...mockProps} type="textarea" />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector("textarea");
    expect(input).not.toBeNull();
    expect(container.querySelector("input")).toBeNull();
  });

  it("it does not render a text element if a type is neither input nor textarea", () => {
    const { container } = render(<TextInput {...mockProps} type="paragraph" />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector("textarea");
    expect(input).toBeNull();
  });
});
