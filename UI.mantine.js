/* Mantine wrapper */

import { Fragment } from "react";
import {
  ActionIcon,
  Card,
  Button,
  Overlay,
  Input,
  InputWrapper as MantineInputWrapper,
  PasswordInput,
  Checkbox,
  Alert,
  Menu,
  MenuItem,
  SegmentedControl,
  Textarea,
  Badge,
  Modal,
  Loader,
  LoadingOverlay,
  Tooltip,
} from "@mantine/core";
import _ from "lodash";

import {
  FiX,
  FiStar,
  FiPlus,
  FiMoreVertical,
  FiCode,
  FiChevronsLeft,
  FiChevronsRight,
  FiTrash2,
  FiHelpCircle,
  FiHexagon,
  FiXCircle,
} from "react-icons/fi";

const mantineDefaultProps = {
  size: "xs",
  radius: "xs",
};

const getIcon = (type) => {
  switch (type) {
    case "close":
      return <FiX />;
    case "code":
      return <FiCode />;
    case "star":
      return <FiStar />;
    case "plus":
      return <FiPlus />;
    case "delete":
      return <FiTrash2 />;
    // return <FiXCircle />;
    case "caret-left":
      return <FiChevronsLeft />;
    case "caret-right":
      return <FiChevronsRight />;
    case "help":
      return <FiHelpCircle />;
    case "about":
      return <FiHexagon />;
  }
};

const IconWrapper = (props) => {
  const { type, tooltip } = props;
  const icon = getIcon(type);
  const iconComp = (
    <ActionIcon variant="light" {...props}>
      {icon}
    </ActionIcon>
  );

  // return iconComp;

  return tooltip ? (
    <Tooltip
      label={tooltip}
      color="gray"
      radius="xs"
      position="bottom"
      withArrow
    >
      {iconComp}
    </Tooltip>
  ) : (
    iconComp
  );
};

const ButtonWrapper = ({ children, ...props }) => {
  return (
    <Button {...mantineDefaultProps} {...props}>
      {children}
    </Button>
  );
};

const InputWrapper = (props) => {
  const { type, onChange, required, error, label, ...rest } = props;

  const handleOnChange = (e) => onChange(e, e.currentTarget.value);

  const field =
    type === "password" ? (
      <PasswordInput
        {...mantineDefaultProps}
        {...rest}
        variant="filled"
        onChange={handleOnChange}
      />
    ) : type === "textarea" ? (
      <Textarea
        minRows={props.rows || props.minRows}
        variant="filled"
        {...mantineDefaultProps}
        {...rest}
        onChange={handleOnChange}
      />
    ) : (
      <Input
        {...mantineDefaultProps}
        {...rest}
        variant="filled"
        onChange={handleOnChange}
      />
    );

  return label ? (
    <MantineInputWrapper
      {...mantineDefaultProps}
      required={required}
      label={label}
      error={error}
    >
      {field}
    </MantineInputWrapper>
  ) : (
    field
  );
};

const CheckboxWrapper = (props) => {
  return <Checkbox {...mantineDefaultProps} {...props} />;
};

const AlertWrapper = (props) => {
  const { children, message } = props;
  return <Alert {...props}>{message || children}</Alert>;
};

const CardWrapper = (props) => {
  const defaultProps = {
    withBorder: true,
  };

  const updatedProps = {
    ...mantineDefaultProps,
    ...defaultProps,
    ...props,
  };

  return <Card withBorder {...updatedProps} />;
};

const OverlayWrapper = (props) => {
  return <Overlay {...props} />;
};

const LoaderWrapper = (props) => {
  const loaderProps = {
    color: "gray",
    size: "md",
    variant: "dots",
    ...props,
  };
  return (
    <Fragment>
      <LoadingOverlay
        visible
        loaderProps={loaderProps}
        // loaderProps={{ size: "sm", color: "pink", variant: "bars" }}
        // overlayOpacity={0.3}
        // overlayColor="#c5c5c5"
      />
      {/* <Loader {...loaderProps} /> */}
    </Fragment>
  );
};

const RadioWrapper = ({ onChange, ...props }) => {
  const { options } = props;
  const handleOnChange = (value) => onChange(value, value);
  return (
    <SegmentedControl
      fullWidth
      color="violet"
      size={"xs"}
      data={options}
      onChange={handleOnChange}
      {...props}
    />
  );
};

const TagWrapper = (props) => {
  const { children } = props;

  const defaultProps = {
    color: "teal",
    variant: "filled",
  };

  const updatedProps = {
    ...mantineDefaultProps,
    ...defaultProps,
    ...props,
  };

  return <Badge {...updatedProps}>{children}</Badge>;
};

const MenuWrapper = (props) => {
  const { menu = [], onChange } = props;
  return (
    <Menu
      {...mantineDefaultProps}
      closeOnScroll={false}
      menuPosition={{ top: "100%", right: "4px" }}
      control={
        <ActionIcon size="sm" variant="transparent">
          <FiMoreVertical />
        </ActionIcon>
      }
    >
      {_.map(menu, ({ id, label, icon }) => (
        <MenuItem icon={icon} key={id} onClick={() => onChange(id)}>
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
};

const ModalWrapper = (props) => {
  const { title, children, visible, setVisibility } = props;

  return (
    <Modal
      centered
      padding="md"
      radius="xs"
      size="lg"
      overflow={"inside"}
      opened={visible}
      onClose={() => setVisibility(false)}
      title={title}
    >
      {children}
    </Modal>
  );
};

export {
  IconWrapper,
  ButtonWrapper,
  InputWrapper,
  CheckboxWrapper,
  AlertWrapper,
  MenuWrapper,
  CardWrapper,
  OverlayWrapper,
  RadioWrapper,
  TagWrapper,
  ModalWrapper,
  getIcon,
  LoaderWrapper,
};
