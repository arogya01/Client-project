import React from "react";
import { InputLabel, SelectBox } from "../../../global.elements";
import { DropdownContainer } from "./Dropdown.elements";

const Dropdown = ({
  serviceName,
  options,
  value,
  disabled,
  setValue,
  onValueChange,
}) => {
  return disabled ? (
    <DropdownContainer>
      <InputLabel>{serviceName}</InputLabel>
      <SelectBox
        width="218px"
        disabled
        onChange={(event) => {
          onValueChange(event.target.value, setValue);
        }}
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </SelectBox>
    </DropdownContainer>
  ) : (
    <DropdownContainer>
      <InputLabel>{serviceName}</InputLabel>
      <SelectBox
        width="218px"
        onChange={(event) => {
          onValueChange(event.target.value, setValue);
        }}
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </SelectBox>
    </DropdownContainer>
  );
};

export default Dropdown;
