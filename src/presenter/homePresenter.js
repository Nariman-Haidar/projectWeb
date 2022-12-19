import React, { useState, useEffect } from "react";
import { usePromise } from "../js/usePromise.js";
import { promiseNoData } from "../js/promiseNoData.js";
import { HomeResultsView } from "../views/homeView";
import { BookSource } from "../js/bookSource";

export function HomePresenter(props) {
  const [myPromise, setPromise] = useState(null);
  const [myPromise2, setPromise2] = useState(null);
  useEffect(function () {
    setPromise(BookSource.searchBookCategor(" ", "Fiction"));
    setPromise2(BookSource.searchBookCategor("   ", "Psychology"));
  }, []);

  const [myData, myError] = usePromise(myPromise);
  const [myData2, myError2] = usePromise(myPromise2);

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    slideNum: 4,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div>
      {promiseNoData(myPromise, myData, myError) || (
        <HomeResultsView
          settings={settings}
          searchResults={myData}
          bookChosen={(id) => props.model.setCurrentBook(id)}
        />
      )}{" "}
      {
        <HomeResultsView
          settings={settings}
          searchResults={myData2}
          bookChosen={(id) => props.model.setCurrentBook(id)}
        />
      }
    </div>
  );
}
