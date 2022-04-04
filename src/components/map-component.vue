<template>
  <div ref="mapRef" style="width: 100%; height: 100%"></div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "map-component",
  props: {
    chosenCityObj: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    //START инициализация Яндекс Карты
    const ymaps = window.ymaps;

    const mapRef = ref(null);

    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);

    function initYandexMap(mapRef) {
      let coords = []; //сюда будут записываться координаты центра карты
      let rateZoom = null; //сюда будет записываться величина зума карты
      //если выбран пункт выдачи, то подставляются координаты этого пункта
      if (Object.keys(selectedPoint.value).length !== 0) {
          const foundPoint = props.chosenCityObj.points.find(
              (point) => point.id === selectedPoint.value.id
          );
          coords = foundPoint.coordsPoint;
          rateZoom = 15;
      }
      //иначе если выбран город, то подставляются координаты этого города
      else if (Object.keys(selectedCity.value).length !== 0) {
        coords = props.chosenCityObj.coords;
        rateZoom = 12;
      }
      //иначе подставляются координаты Географический центр России
      else {
        coords = [67.010134, 94.337659];
        rateZoom = 3;
      }

      const myMap = new ymaps.Map(mapRef, {
        center: coords, //координаты центра карты
        zoom: rateZoom, //зум карты
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
      selectedCity,
      selectedPoint,
    };
  },
};
</script>
>

<style lang="scss">
@import "@/assets/variables.scss";
</style>
