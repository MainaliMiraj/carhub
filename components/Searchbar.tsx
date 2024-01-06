"use client";
import React, { useState } from "react";
import { SearchButton, SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" || model === "") {
      return alert("Please enter the car you want to search for...");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName,{scroll:false});
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={`sm:hidden`} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="modelOfCar"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tugian"
          className="searchbar__input"
        />
        <SearchButton otherClasses="max:hidden" />
      </div>
    </form>
  );
};

export default Searchbar;
