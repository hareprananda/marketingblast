function ValidateCore(
  toValidate: any,
  status: boolean = true,
  message: string[] = []
) {
  toValidate = toValidate || "";
  function isNumber() {
    try {
      parseFloat(toValidate);
      return ValidateCore(toValidate, true);
    } catch (err) {
      const errorMessage = "Your value is not a number";
      return ValidateCore(toValidate, false, [...message, errorMessage]);
    }
  }
  function lengthLowerThan(maxLength: number) {
    const errorMessage = "Your character length is not less than " + maxLength;
    const match = toValidate.length < maxLength;
    return ValidateCore(
      toValidate,
      match,
      match ? message : [...message, errorMessage]
    );
  }
  function lengthGreaterThan(minLength: number) {
    const errorMessage =
      "Your character length is not greater than " + minLength;
    const match = toValidate.length > minLength;
    return ValidateCore(
      toValidate,
      match,
      match ? message : [...message, errorMessage]
    );
  }

  function lengthEqual(length: number) {
    const errorMessage = "Your character length is not equal to " + length;
    const match = toValidate.length === length;
    return ValidateCore(
      toValidate,
      match,
      match ? message : [...message, errorMessage]
    );
  }

  function required() {
    const errorMessage = "You passed blank data";
    const match = toValidate.trim().length > 0;
    return ValidateCore(
      toValidate,
      match,
      match ? message : [...message, errorMessage]
    );
  }

  function isEmail() {
    const errorMessage = "Your data is not an email";
    const match =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        toValidate
      );
    return ValidateCore(
      toValidate,
      match,
      match ? message : [...message, errorMessage]
    );
  }

  function check() {
    return status;
  }
  function getMessage() {
    return message;
  }

  return {
    isNumber,
    lengthLowerThan,
    lengthEqual,
    lengthGreaterThan,
    required,
    isEmail,
    check,
    getMessage,
  };
}

export const Validate = (toValidate: any) => ValidateCore(toValidate);

export function ObjectValidate<T extends string>(
  checkedObject: Record<T, any>,
  requirement: Record<T, ReturnType<typeof ValidateCore>>
) {
  let pass = true;
  for (let key of Object.keys(checkedObject)) {
    if (!(key in requirement)) continue;

    pass = requirement[key as T].check();

    if (!pass) break;
  }
  function validate() {
    return pass;
  }

  function message() {
    const allMessage = {} as Record<keyof typeof checkedObject, string[]>;
    for (let key of Object.keys(checkedObject)) {
      if (!(key in requirement)) continue;

      const message = requirement[key as T].getMessage();
      if (message.length === 0) continue;
      allMessage[key as T] = message;
    }
    return allMessage;
  }

  return {
    validate,
    message,
  };
}
