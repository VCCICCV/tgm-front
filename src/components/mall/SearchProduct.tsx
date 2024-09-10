'use client';
import type { SearchProductProps } from "@/types"
import { Button } from "@nextui-org/react";
/*
 * @Author: cci
 * @Date: 2024-08-31 16:00:34
 * @LastEditors: cci
 * @LastEditTime: 2024-09-11 03:32:11
 * @Description: 查找商品
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */

const SearchProduct = ({ carTypes, setCarTypes }: SearchProductProps) => {
  return (
    <div className="search-product">
      <Button color="primary">
        Button
      </Button>
    </div>
  )
}

export default SearchProduct