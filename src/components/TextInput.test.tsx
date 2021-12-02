import React from "react";
import { screen, render } from "@testing-library/react";
import FormInput from "./TextInput";

let mockProps = {
  label: "test-input",
  handleOnChange: jest.fn(),
  value: "Hello!",
  placeHolder: "Text input here",
  type: "input",
};

describe("<FormInput />", () => {
  it('renders a text input with the value "Hello!" and placeholder to be "Textarea input here"', () => {
    render(<FormInput {...mockProps} />);

    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test\-input/i,
    });

    expect(input.value).toBe(mockProps.value);
    expect(input.placeholder).toBe(mockProps.placeHolder);
  });

  it('renders a text input with the value "Good Day" after prop change', () => {
    render(<FormInput {...mockProps} value="Good Day" />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test\-input/i,
    });

    expect(input.value).toBe("Good Day");
    expect(input.value).not.toBe("Hello!");
  });

  it('renders the input element when the type prop is "input"', () => {
    const { container } = render(<FormInput {...mockProps} />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector(mockProps.type);
    expect(input).not.toBeNull();
    expect(container.querySelector('textarea')).toBeNull();
  });

  it("renders the correct element when the type prop is changed", () => {
    const { container } = render(<FormInput {...mockProps} type="textarea" />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector("textarea");
    expect(input).not.toBeNull();
    expect(container.querySelector('input')).toBeNull();
  });
});
