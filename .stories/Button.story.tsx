//.stories/Button.story.tsx
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src/components/Button";

storiesOf("Button", module).add("Default", () => <Button label="Continue" />);