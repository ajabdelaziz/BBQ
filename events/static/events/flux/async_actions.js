export function setFormData(form_name, data) {
  return { type: "FORM__SET_DATA", form_name, data };
}