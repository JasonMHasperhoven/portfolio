let incrementer = 0;

export const uniqueId = local => {
  incrementer++;

  return incrementer;
}
