/* MUI wrapper */

import React from "react";
import _ from "lodash";
import {
  CloseCircleOutlined,
  StarOutlined,
  PlusOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import { Checkbox, Menu, Dropdown } from "antd";
import { getIcons } from "./icons";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const IconWrapper = (props) => {
  const { type } = props;
  const icon = getIcon(type);
  return icon;
};

const ButtonWrapper = (props) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};

const RadioWrapper = (props) => {
  const { options, value, onChange } = props;
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      {options.map((option) => (
        <Button>{option.label}</Button>
      ))}
    </ButtonGroup>
  );
};

const InputWrapper = (props) => {
  const { type, onChange, required, error, label, ...rest } = props;

  const field =
    type === "password" ? (
      <TextField
        {...rest}
        onChange={(e) => onChange({ value: e.currentTarget.value })}
      />
    ) : type === "textarea" ? (
      <TextField
        multiline
        variant="filled"
        {...rest}
        onChange={(e) => onChange(e, e.target.value)}
      />
    ) : (
      <TextField
        {...rest}
        onChange={(e) => onChange({ value: e.currentTarget.value })}
      />
    );

  return field;
};

const CheckboxWrapper = (props) => {
  return <Checkbox {...props} />;
};

const CardWrapper = (props) => {
  const { children } = props;

  return (
    <Card {...props}>
      <CardContent>{children}</CardContent>
      {/* <CardActions></CardActions> */}
    </Card>
  );
};

const AlertWrapper = (props) => {
  const { type, message } = props;
  return (
    <Alert severity={type} {...props}>
      {message}
    </Alert>
  );
};

const MenuWrapper = (props) => {
  const { menu = [], onChange } = props;
  const overlay = (
    <Menu>
      {_.map(menu, ({ id, label, icon }) => (
        <Menu.Item key={id}>{label}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={overlay} trigger={["click"]}>
      <IconWrapper type="more" />
    </Dropdown>
  );
};

export {
  IconWrapper,
  ButtonWrapper,
  InputWrapper,
  CheckboxWrapper,
  MenuWrapper,
  CardWrapper,
  AlertWrapper,
  RadioWrapper,
};
