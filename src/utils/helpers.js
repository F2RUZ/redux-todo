export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};
