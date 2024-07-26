const useEnsureArray = (value: string | string[] | undefined): string[] => {
  if (Array.isArray(value)) return value;
  if (value === undefined) return [];
  return [value];
};

export default useEnsureArray;
