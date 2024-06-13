const emailValidate = (email: string) => {
  return new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$').test(email);
};
