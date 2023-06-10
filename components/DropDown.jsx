import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px', // Customize input field border-radius
    padding: '2px 8px 2px 8px',
    placeholder: 'Skills',
    boxShadow: state.isFocused ? 'none' : 'none', // Customize focus ring color
    borderColor: '#000000',

    border: 'none', // Default border color
    input: {
      border: 'none',
      outline: 'none',
      borderColor: '#efefef',
    },
    focus: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'hidden',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    // Customize dropdown border-radius
  }),

  menuList: (provided) => ({
    ...provided,
    borderRadius: '4px', // Apply border radius to the bottom of the options dropdown
    maxHeight: '160px', // Set a max height for the dropdown
    padding: '4px 0px',
  }),

  multiValue: (provided) => ({
    ...provided,

    borderRadius: '4px', // Customize multi-value tag border-radius
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#777',
    padding: '0px 0px',

    '&:hover': {
      color: '#777',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    padding: '8px 16px',
    backgroundColor: state.isSelected ? '#f4f4f4' : 'white',
    color: state.isSelected ? '#555' : '#555',
    '&:hover': {
      backgroundColor: '#f4f4f4', // Change the hover color here
    },
  }),
};

const DropDown = ({
  dropDownOptions,
  setSelected,
  isMulti,
  placeholder,
  defaultValue,
}) => {
  const handelChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <div>
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        defaultValue={defaultValue}
        isMulti={isMulti}
        placeholder={placeholder}
        styles={customStyles}
        onChange={handelChange}
        options={dropDownOptions}
        className="border border-black rounded-lg placeholder:text-gray-500  w-full"
        classNamePrefix="select"
      />
    </div>
  );
};

export default DropDown;
