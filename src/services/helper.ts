export const validateEmail = (email: string) => {
  const re = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
  );
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const re = new RegExp("(?=.{6,})");
  return re.test(String(password).toLowerCase());
};
