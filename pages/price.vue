<template>
  <div class="wedding-calculator">
    <!-- 4 boxes per row, 2 rows -->
    <v-row>
      <!-- FOR LOOP -->
      <!-- ----------------- -->
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <v-card class="elevation-0" dark>
          <!-- ----------------- -->
          <!-- TITLE ICON -->
          <!-- ----------------- -->
          <v-card-title
            class="justify-center"
            @click="toggle(item.calc_id, item.type)"
          >
            <v-icon class="display-1">{{ item.icon }}</v-icon>
          </v-card-title>
          <!-- ----------------- -->
          <!-- TITLE TEXT -->
          <!-- ----------------- -->
          <v-card-text
            class="text-center item-title"
            @click="toggle(item.calc_id, item.type)"
          >
            {{ item.title }}
          </v-card-text>
          <!-- ----------------- -->
          <!-- NUMBER TYPE -->
          <!-- ----------------- -->
          <v-card-text
            class="item-quantity-control"
            v-if="item.type == 'number'"
          >
            <v-icon class="display-1 item-minus" @click="subone(item.calc_id)"
              >mdi-minus-circle</v-icon
            >
            <span class="item-quantity-result">
              {{ calculation_current[item.calc_id] }}
            </span>
            <v-icon class="display-1 item-plus" @click="addone(item.calc_id, 2)"
              >mdi-plus-circle</v-icon
            >
          </v-card-text>
          <!-- ----------------- -->
          <!-- BOOLEAN TYPE -->
          <!-- ----------------- -->
          <v-card-text
            class="item-quantity-control"
            v-if="item.type == 'boolean'"
            @click="toggle(item.calc_id, item.type)"
          >
            <v-icon
              :class="[
                'display-1',
                'item-toggle-circle',
                calculation_current[item.calc_id]
                  ? 'item-selected'
                  : 'item-not_selected',
              ]"
              >{{
                calculation_current[item.calc_id]
                  ? 'mdi-check-circle'
                  : 'mdi-checkbox-blank-circle-outline'
              }}</v-icon
            >
          </v-card-text>
          <!-- ----------------- -->
          <!-- 4K OPTION -->
          <!-- ----------------- -->
          <v-card-text class="text-center" v-if="item.option_4k == true">
            <v-checkbox
              class="checkbox4k"
              :v-model="item.vmodel"
              label="4K videó"
              hide-details
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer cols="6"></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    addone(item, max) {
      if (this.calculation_current[item] >= max) return
      this.calculation_current[item] += 1
    },
    subone(item) {
      if (this.calculation_current[item] <= 0) return
      this.calculation_current[item] -= 1
    },
    toggle(item, type) {
      if (type != 'boolean') return
      this.calculation_current[item] = !this.calculation_current[item]
    },
  },
  data() {
    return {
      items: {
        szertartas_foto: {
          id: 1,
          icon: 'mdi-camera',
          title: 'Szertartás Fotózás',
          calc_id: 'szertartas_foto',
          type: 'number',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        lakodalom_foto: {
          id: 2,
          icon: 'mdi-camera',
          title: 'Lakodalom Fotózás',
          calc_id: 'lakodalom_foto',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        szertartas_video: {
          id: 5,
          icon: 'mdi-video',
          title: 'Szertartás Videózás',
          calc_id: 'szertartas_video',
          type: 'number',
          min: 0,
          max: 2,
          vmodel: 'calculation_current.szertartas_video_4k',
          option_4k: true,
        },

        lakodalom_video: {
          id: 6,
          icon: 'mdi-video',
          title: 'Lakodalom Videózás',
          calc_id: 'lakodalom_video',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: 'calculation_current.lakodalom_video_4k',
          option_4k: true,
        },
        kreativ_foto: {
          id: 3,
          icon: 'mdi-camera',
          title: 'Kreatív Fotózás',
          calc_id: 'kreativ_foto',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        eljegyzes_foto: {
          id: 4,
          icon: 'mdi-camera',
          title: 'Eljegyzés Fotózás',
          calc_id: 'eljegyzes_foto',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        highlights: {
          id: 7,
          icon: 'mdi-video',
          title: 'Highlights Videó',
          calc_id: 'highlights',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        cinematography: {
          id: 8,
          icon: 'mdi-video',
          title: 'Cinematography Videó',
          calc_id: 'cinematography',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        kreativ_video: {
          id: 9,
          icon: 'mdi-video',
          title: 'Kreatív Videózás',
          calc_id: 'kreativ_video',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
        dron_video: {
          id: 10,
          icon: 'mdi-video',
          title: 'Drón Videózás',
          calc_id: 'dron_video',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
        },
      },
      calculation_current: {
        szertartas_foto: 0,
        lakodalom_foto: false,
        kreativ_foto: false,
        eljegyzes_foto: false,
        szertartas_video: 0,
        szertartas_video_4k: false,
        lakodalom_video: false,
        lakodalom_video_4k: false,
        highlights: false,
        cinematography: false,
        kreativ_video: false,
        dron_video: false,
      },
    }
  },
}
</script>

<style lang="scss">
// $title-fontsize: max(1.25rem, 1.25vw);
$title-fontsize: max(1rem, 1vw);
$icon-fontsize: max(1.75rem, 1.75vw);
$result-fontsize: max(1.75rem, 1.75vw);

.wedding-calculator {
  width: 80%;
  margin-inline: auto;
  margin-top: 25vh;
  overflow: hidden;
  margin-bottom: 25vh;
  @media (min-width: 50em) {
    position: absolute;
    left: 10vw;
    width: 40%;
  }

  .v-card {
    padding-bottom: 1em;
    transition: 250ms;
    .item-title {
      font-size: $title-fontsize;
    }

    .checkbox4k {
      .v-input__slot {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .v-label {
        left: 0.75em !important;
        width: fit-content !important;
        flex: none !important;
      }
    }

    .item-quantity-control {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .item-minus {
        --color-normal: hsla(0, 42%, 43%, 0.638);
        --color-hover: hsla(0, 42%, 43%, 1);
      }

      .item-plus {
        --color-normal: hsla(120, 42%, 43%, 0.638);
        --color-hover: hsla(120, 42%, 43%, 1);
      }
      .item-minus,
      .item-plus {
        font-size: $icon-fontsize;
        color: var(--color-normal);
        &:hover {
          cursor: pointer;
          color: var(--color-hover);
        }
      }

      .item-toggle-circle {
        font-size: $icon-fontsize;
        transition: 250ms;

        &.item-not_selected {
          color: rgb(141, 141, 141);
        }

        &.item-selected {
          scale: 1.45;
          color: hsla(120, 42%, 43%, 1);
        }
      }
      .item-quantity-result {
        color: white;
        font-weight: bold;
        font-size: $result-fontsize;
      }
    }
  }
  .v-card {
    border: 1px solid hsla(189, 64%, 23%, 0.365);
    &:hover {
      background: hsla(189, 84%, 43%, 0.065);
      cursor: pointer;
    }

    .v-card__text {
    }
  }
}
</style>
