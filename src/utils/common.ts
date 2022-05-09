import trim from "lodash/trim";

export function toFullName(firstName, lastName) {
  return trim([firstName, lastName].join(" "));
}
