export const stringJoin = (args, delimeter = ' - ') => {
  return args ? args.filter((v) => v).join(delimeter) : '';
};

export const pathJoin = (...args) => {
  return stringJoin(args, '/');
};
