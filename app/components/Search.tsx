"use client";
import { SearchInput } from "anjrot-components";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnchange = useDebouncedCallback((value: string) => {
    console.log("value :>>", value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    console.log("params :>>", params.toString());
    replace(`${pathname}?${params.toString()}`);
  }, 2000);

  return (
    <SearchInput
      placeholder="Search..."
      onChange={(e) => {
        handleOnchange(e.target.value);
      }}
    />
  );
};

export default Search;
