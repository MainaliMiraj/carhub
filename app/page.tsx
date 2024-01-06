import { CarCard, CustomFilter, Hero, Searchbar } from "@/components";
import Image from "next/image";
/* set your api from 'https://rapidapi.com/apininjas/api/cars-by-api-ninjas' fetch the data and import the data to use here.*/
import { fetchCars } from "../utils/index";

export default async function Home() {
  const allCars = await fetchCars();
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
          <CustomFilter />
          <CustomFilter />
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
              oops... no result found
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
