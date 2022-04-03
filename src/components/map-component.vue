<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "map-component",
  props: {
    chosenCityObj: {
      type: Object,
    },
  },
  setup(props) {
    //START инициализация Яндекс Карты
    const ymaps = window.ymaps;

    function initYandexMap() {
      var coords = [];
      if (props.chosenCityObj?.coords) {
        coords = props.chosenCityObj.coords;
      } else {
        coords = [55.75322, 37.622513];
      }
      var myMap = new ymaps.Map("map", {
        center: coords, //координаты центра карты
        zoom: 12, //зум карты
        controls: [], //убираем стандартные элементы управления на карте
      });
      // добавление маркеров с изображением из макета
      if (props.chosenCityObj?.points) {
        for (let i = 0; i < props.chosenCityObj.points.length; i++) {
          var myPlacemark = new ymaps.Placemark(
            props.chosenCityObj.points[i].coords,
            {
              hintContent: props.chosenCityObj.points[i].name, //сообщение при наведении на маркер
              balloonContent: props.chosenCityObj.points[i].name, //сообщение при нажатии на маркер
            },
            {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: `${require("../assets/map-marker.svg")}`,
              // Размеры метки.
              iconImageSize: [18, 18],
            }
          );
          myMap.geoObjects.add(myPlacemark);
        }
      }
    }

    ymaps.ready(initYandexMap);
    //END инициализация Яндекс Карты

    return {
      ymaps,
    };
  },
};
</script>
>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
