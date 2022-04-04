<template>
  <div ref="mapRef" style="width: 100%; height: 100%"></div>
</template>

<script>
import { ref, onMounted } from "vue";

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

    const mapRef = ref(null);

    function initYandexMap(mapRef) {
      let coords = [];
      //если город выбран, берутся координаты города и подставляются в центр карты
      if (props.chosenCityObj?.coords) {
        coords = props.chosenCityObj.coords;
      }
      //иначе подставляются по-умолчанию координаты Москвы
      else {
        coords = [55.75322, 37.622513];
      }
      const myMap = new ymaps.Map(mapRef, {
        center: coords, //координаты центра карты
        zoom: 12, //зум карты
        controls: [], //убираем стандартные элементы управления на карте
      });
      // добавление маркеров с изображением из макета
      if (props.chosenCityObj?.points) {
        for (let i = 0; i < props.chosenCityObj.points.length; i++) {
          const myPlacemark = new ymaps.Placemark(
            props.chosenCityObj.points[i].coordsPoint,
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

    onMounted(() => {
      ymaps.ready(() => initYandexMap(mapRef.value));
    });
    //END инициализация Яндекс Карты

    return {
      ymaps,
      mapRef,
    };
  },
};
</script>
>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
