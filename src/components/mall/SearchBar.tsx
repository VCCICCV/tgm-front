/*
 * @Author: cci
 * @Date: 2024-08-30 16:52:11
 * @LastEditors: cci
 * @LastEditTime: 2024-08-31 16:34:00
 * @Description: 搜索栏
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */
'use client';

import SearchProduct from "../mall/SearchProduct";
import { useState } from "react";

const SearchBar = () => {
    const [carTypes, setCarTypes] = useState("")
    const handleSearch = () => { }
    return (
        <form className="searchbar"
            onSubmit={handleSearch}>
            <div>
                SearchBar
            </div>
            {/* 过滤搜索 */}
            <div
                className="searchbar__item"
            >
                <SearchProduct 
                    carTypes={carTypes}
                    setCarTypes={setCarTypes}
                />
            </div>
        </form>
    )
}

export default SearchBar