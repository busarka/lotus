import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState } from 'react';

const filter = createFilterOptions();

export default function SearchFieldMui({people}) {
    const [value, setValue] = useState(null);

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                setValue({
                    name: newValue,
                });
                } else if (newValue && newValue.inputValue) {
                setValue({
                    name: newValue.inputValue,
                });
                } else {
                setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                return filter(options, params);
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={people}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                return option;
                }
                if (option.inputValue) {
                return option.inputValue;
                }
                return option.name;
            }}
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            sx={{ width: '100%' }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label={"Начните вводить имя"} />
            )}
        />
    )
}

