
export const currencyInputProps = {
    required: true,
    type: "number",
    min: "1"
}

export const allocation_amount_input = {
    id: 0,
    name: "allocation_amount",
    placeholder: "Allocation Amount",
    label: "Allocation Amount",
    ...currencyInputProps
};

export const inputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        label: "Name",
        required: true,
    },
    {
        id: 2,
        name: "requested_amount",
        placeholder: "Requested Amount",
        label: "Requested Amount",
        ...currencyInputProps
    },
    {
        id: 3,
        name: "average_amount",
        placeholder: "Average Amount",
        label: "Average Amount",
        ...currencyInputProps

    },
];