const { useMemo } = require("react");
const { useLocation } = require("react-router");

function useSearchParams() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default useSearchParams;
