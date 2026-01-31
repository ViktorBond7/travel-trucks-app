export const featuresConfig = [
  {
    key: "transmission",
    label: (value) => (value === "automatic" ? "Automatic" : "Manual"),
    alwaysShow: true,
    idIcon: "icon-automatic",
  },
  {
    key: "engine",
    label: (value) => value,
    alwaysShow: true,
    idIcon: "icon-petrol",
  },
  { key: "AC", label: () => "AC", idIcon: "icon-ac" },
  { key: "bathroom", label: () => "Bathroom", idIcon: "icon-shower" },
  { key: "kitchen", label: () => "Kitchen", idIcon: "icon-kitchen" },
  { key: "TV", label: () => "TV", idIcon: "icon-tv" },
  { key: "radio", label: () => "Radio", idIcon: "icon-radios" },
  { key: "refrigerator", label: () => "Refrigerator", idIcon: "icon-fridge" },
  { key: "microwave", label: () => "Microwave", idIcon: "icon-microwave" },
  { key: "gas", label: () => "Gas", idIcon: "icon-gas" },
  { key: "water", label: () => "Water", idIcon: "icon-water" },
];
