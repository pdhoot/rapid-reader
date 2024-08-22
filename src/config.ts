const apiHostname = import.meta.env.VITE_API_HOSTNAME;

if (!apiHostname) {
  throw new Error("VITE_API_HOSTNAME is not defined");
}

export default {
  apiHostname,
};
