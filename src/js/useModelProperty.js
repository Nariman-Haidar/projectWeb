import  {useState, useEffect} from "react";

export function useModelProperty(model, propertyName) {

  const [value, setValue] =  useState(model[propertyName]);

   useEffect(
    function () {
      function obs() {
        setValue(model[propertyName]);
      }
      model.addObserver(obs);
      return function () {
        model.removeObserver(obs);
      };
    },
    [model, propertyName]
  );
  return value;
}
