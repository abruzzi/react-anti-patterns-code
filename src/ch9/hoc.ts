type Func<T extends unknown[]> = (...args: T) => unknown;
const withAudit = <T extends unknown[]>(func: Func<T>) => {
  return (...args: T) => {
    console.log(`function has been called with ${args}`);
    return func(...args);
  };
};

const capitalize = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

const enhancedCapitalize = withAudit(capitalize);

console.log(enhancedCapitalize("hello world"));

export { enhancedCapitalize };

// ---


