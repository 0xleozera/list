const debounce = (callback, delay = 1000) => {
  let timeout;

  return (...params) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(...params), delay);
  };
};

export default debounce;
