export const transformFiltersToParams = (values) => {
  const rawValues = {
    ...values,
    transmission: values.transmission ? "automatic" : "",
  };

  const entris = Object.entries(rawValues);

  const withoutLast = entris.slice(0, -1);

  const result = Object.fromEntries(
    withoutLast.filter(([_, val]) => {
      return val !== false && val !== "" && val !== null;
    }),
  );

  return result;
};
