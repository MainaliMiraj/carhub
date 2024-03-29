import { CarCard, CustomFilter, Hero, Searchbar } from "@/components";
import Image from "next/image";
/* set your api from 'https://rapidapi.com/apininjas/api/cars-by-api-ninjas' fetch the data and import the data to use here.*/
import { fetchCars } from "../utils/index";

import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { FilterProps } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container"></div>
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              no results matched your search
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
        <ShowMore
          pagesNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > allCars.length}
        />
      </div>
    </main>
  );
}
