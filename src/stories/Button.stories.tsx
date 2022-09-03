import ButtonComponent from "../components/ButtonComponent";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Button/Button",
  component: ButtonComponent,
  argTypes: {
    children: {
      name: "label",
      description: "The content of button.",
      type: "string",
    },
    disabled: {
      type: "boolean",
      description:
        "If `disabled` is true then user can't interact with component.",
    },
    color: {
      description: "The background color of the component.",
    },
    variant: {
      description: "The variant to use.",
    },
    rounded: {
      description: "Make rounded Button.",
    },
    size: {
      description: "The size of Button.",
    },
    width: {
      description: "Change width of button",
    },
    alignment: {
      description: "Change alignment of button.",
    },
    onClick: { type: "function", description: "Button click handler." },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template = (args: any) => <ButtonComponent {...args} />;

export const Button: ComponentStory<typeof ButtonComponent> = Template.bind({});

Button.parameters = {
  docs: {
    description: {},
  },
};

Button.args = {
  children: "Submit",
  disabled: false,
};
