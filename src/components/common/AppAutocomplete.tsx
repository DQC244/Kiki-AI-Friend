import React, { memo } from "react";
import { Autocomplete, TextField, TextFieldProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const AppAutocomplete = ({ options, onChangeValueInput, onChange }: AppAutocompleteProps) => {
  const defaultClasses = useStyles();

  return (
    <Autocomplete
      onInputChange={onChangeValueInput}
      onChange={onChange}
      disablePortal
      fullWidth
      classes={{
        root: defaultClasses.root,
        input: defaultClasses.input,
        popper: defaultClasses.popper,
        listbox: defaultClasses.listbox,
        option: defaultClasses.option,
        noOptions: defaultClasses.noOptions,
      }}
      options={options}
      renderInput={(params: TextFieldProps) => <TextField {...params} />}
    />
  );
};

type OptionType = {
  label: string;
  [x: string]: unknown;
};

type AppAutocompleteProps = {
  options: Array<OptionType>;
  onChangeValueInput: (event: React.SyntheticEvent, value: string, reason: string) => void;
  onChange: (event: React.SyntheticEvent, value: any | Array<any>, reason: string) => void;
};

export default memo(AppAutocomplete);

const useStyles = makeStyles((theme: ThemeProps) => ({
  input: {
    "&$input$input": {
      marginTop: 3,
      padding: 0,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "17px",
      textTransform: "capitalize",
      borderBottom: `1px solid ${theme.palette.common.black}`,
      textAlign: "center",
    },
  },
  listbox: {
    padding: 0,
  },
  option: {
    "&$option": {
      padding: "2px 8px",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "17px",
      textTransform: "capitalize",
    },
  },
  noOptions: {
    "&$noOptions": {
      color: theme.palette.common.black,
      padding: 8,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "17px",
      textTransform: "lowercase",
    },
  },
  root: {
    "&$root$root .MuiOutlinedInput-root": {
      padding: 0,
    },
    "&$root .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },
    "&$root .MuiAutocomplete-endAdornment": {
      display: "none",
    },
  },
  popper: {
    color: theme.palette.common.black,
  },
}));
