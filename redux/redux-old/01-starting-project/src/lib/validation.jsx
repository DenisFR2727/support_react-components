export function isNotEmpty(value) {
  return value.trim() !== "";
}
export function isEmailValid(value) {
  return value.includes("@");
}
