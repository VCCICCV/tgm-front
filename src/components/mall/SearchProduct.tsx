'use client';
import type { SearchProductProps } from "@/types"
import { Button } from "@nextui-org/react";
import { useState } from 'react';
import { Input } from "@nextui-org/input";
import Image from 'next/image'
const SearchProduct = ({ carTypes, setCarTypes }: SearchProductProps) => {
  const [query, setQuery] = useState("")
  return (
    <div className="search-product">
      <Button color="primary" className="absolute top-[14px]" />
      <Input

        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="电车"
        value={carTypes}
        onChange={(e) => setQuery(e.target.value)}
      >
      </Input>

      <Image
        src={"/logo.svg"}
        width={20}
        height={20}
        alt="logo"
      >
      </Image>

    </div>
  )
}

export default SearchProduct