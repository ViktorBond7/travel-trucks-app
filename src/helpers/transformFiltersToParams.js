export const transformFiltersToParams = (values) => {
  // Функція для очищення значень від можливих зайвих лапок (double stringify)
  const cleanValue = (val) => {
    if (typeof val === "string") {
      return val.replace(/['"]+/g, "").trim();
    }
    return val;
  };

  // 1. Готуємо трансмісію (перевіряємо і масив, і рядок)
  const transmissionVal = cleanValue(values.transmission);
  const isAutomatic = Array.isArray(values.transmission)
    ? values.transmission.length > 0
    : transmissionVal === "automatic" || values.transmission === true;

  const rawValues = {
    ...values,
    location: cleanValue(values.location),
    form: cleanValue(values.form),
    transmission: isAutomatic ? "automatic" : "",
  };

  // 2. Фільтруємо об'єкт для MockAPI (видаляємо false та порожні рядки)
  return Object.fromEntries(
    Object.entries(rawValues).filter(([_, value]) => {
      return (
        value !== false &&
        value !== "" &&
        value !== null &&
        !(Array.isArray(value) && value.length === 0)
      );
    }),
  );
};
