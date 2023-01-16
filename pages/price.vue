<template>
  <div>
    <CcBackButton destination="/wedding"></CcBackButton>
    <div class="wedding-calc-page-title">
      <CcText
        txt="Állítsa össze csomagját!"
        subtxt=""
        light
        center
        big
        bold
        s1
        doubleline
        letterspace
        padding-m
      ></CcText>
    </div>
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
          <v-card
            :class="
              (['elevation-0'],
              (item.type == 'boolean' &&
                calculation_current[item.calc_id] == true) ||
              (item.type == 'number' && calculation_current[item.calc_id] > 0)
                ? 'selected'
                : '')
            "
            dark
          >
            <!-- ----------------- -->
            <!-- TITLE ICON -->
            <!-- ----------------- -->
            <v-card-title
              class="justify-center"
              @click="toggle(item.calc_id, item.type, item.vmodel)"
            >
              <v-icon class="display-1 title-icon">{{ item.icon }}</v-icon>
            </v-card-title>
            <!-- ----------------- -->
            <!-- TITLE TEXT -->
            <!-- ----------------- -->
            <v-card-text
              class="text-center item-title"
              @click="toggle(item.calc_id, item.type, item.vmodel)"
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
              <v-icon
                class="display-1 item-minus"
                @click="subone(item.calc_id, item.vmodel)"
                >mdi-minus-circle</v-icon
              >
              <span class="item-quantity-result">
                {{ calculation_current[item.calc_id] }}
              </span>
              <v-icon
                class="display-1 item-plus"
                @click="addone(item.calc_id, 2)"
                >mdi-plus-circle</v-icon
              >
            </v-card-text>
            <!-- ----------------- -->
            <!-- BOOLEAN TYPE -->
            <!-- ----------------- -->
            <v-card-text
              class="item-quantity-control"
              v-if="item.type == 'boolean'"
              @click="toggle(item.calc_id, item.type, item.vmodel)"
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
                v-model="calculation_current[item.vmodel]"
                label="4K videó"
                hide-details
                :disabled="!calculation_current[item.calc_id]"
                @change="updateTexts(item.calc_id)"
              ></v-checkbox>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="wedding-results">
      <CcText
        :txt="
          calculation_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
          ' HUF'
        "
        subtxt=""
        light
        center
        big
        bold
        ss6
        doubleline
        letterspace
        padding-m
      ></CcText>
      <!-- <ul class="result-list">
        <li
          class="result-list__subitem"
          v-for="item in calculation_text.items"
          :key="item"
        >
          {{ item.option4k ? item.text + ' - 4K' : item.text }}
        </li>
      </ul> -->
      <!-- <div class="null-button">Visszaállít</div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addone(item, max) {
      if (this.calculation_current[item] >= max) return
      this.calculation_current[item] += 1
      this.updateTexts(item)
    },
    subone(item, vmodel) {
      if (this.calculation_current[item] <= 0) return
      this.calculation_current[item] -= 1
      if (vmodel != '' && this.calculation_current[item] == 0)
        this.calculation_current[vmodel] = false
      this.updateTexts(item)
    },
    toggle(item, type, vmodel) {
      if (type != 'boolean') return
      this.calculation_current[item] = !this.calculation_current[item]
      if (vmodel != '' && this.calculation_current[item] == false)
        this.calculation_current[vmodel] = false
      console.log(this.calculation_current[vmodel])
      this.updateTexts(item)
    },
    updateTexts(item) {
      const item_text = this.items[item].title
      const item_type = this.items[item].type
      const value = this.calculation_current[item]
      const id = this.items[item].id
      var obj = { id: id, text: item_text }
      const option_4k = this.items[item].option_4k
      const vmodel = this.items[item].vmodel
      const categ = this.items[item].category

      if (item_type == 'boolean') {
        if (value) {
          let alreadyExist = false
          this.calculation_text.items.forEach((item) => {
            if (item.id == obj.id) alreadyExist = true
          })
          if (!alreadyExist) {
            this.calculation_text.items.push(obj)
            this.calculation_categories[categ].push(item)
          }
        } else {
          this.calculation_text.items = this.calculation_text.items.filter(
            (item) => item.id !== obj.id
          )
          this.calculation_categories[categ].splice(
            this.calculation_categories[categ].indexOf(item),
            1
          )
        }
      } else if (item_type == 'number') {
        // value == 1
        if (value == 1) {
          this.calculation_text.items = this.calculation_text.items.filter(
            (item) => item.id !== obj.id
          )
          this.calculation_text.items.push(obj)
          if (this.calculation_categories[categ].indexOf(item) == -1)
            this.calculation_categories[categ].push(item)

          // value == 2
        } else if (value == 2) {
          this.calculation_text.items = this.calculation_text.items.map(
            (item) => {
              if (item.id === obj.id) {
                item.text = obj.text + ' x2'
              }
              return item
            }
          )
          if (this.calculation_categories[categ].indexOf(item) == -1)
            this.calculation_categories[categ].push(item)
          // value == 0
        } else if (value == 0) {
          this.calculation_text.items = this.calculation_text.items.filter(
            (item) => item.id !== id
          )
          this.calculation_categories[categ].splice(
            this.calculation_categories[categ].indexOf(item),
            1
          )
        }
      } // end of item_type == 'number'
      if (option_4k) {
        this.calculation_text.items.forEach((item) => {
          if (item.id == obj.id) {
            console.log(this.calculation_current[vmodel])
            item.option4k = this.calculation_current[vmodel]
          }
        })
      }

      this.calculateSubTotal()
      this.calculateDiscount()
      this.calculateTotal()
    },
    calculateSubTotal() {
      this.calculation_subtotal = 0
      Object.keys(this.items).forEach((key) => {
        const item = this.items[key]
        const item_type = item.type
        const value = this.calculation_current[item.calc_id]
        if (
          (item_type == 'boolean' && !value) ||
          (item_type == 'number' && value == 0)
        )
          return

        const option_4k_price = item.option_4k_price
        const vmodel = item.vmodel
        const option_4k = item.option_4k
        let price = item.price

        if (option_4k && this.calculation_current[vmodel])
          price += option_4k_price

        if (item_type == 'boolean') {
          if (value) {
            this.calculation_subtotal += price
          }
        } else if (item_type == 'number') {
          if (value == 1) {
            this.calculation_subtotal += price
          } else if (value == 2) {
            this.calculation_subtotal += price * 2
          }
        }
      })
    },
    calculateDiscount() {
      let discount = 0
      if (this.calculation_categories.category1.length > 1) {
        discount = 0.1
      }
      if (this.calculation_categories.category2.length > 1) {
        discount = 0.1
      }
      if (
        this.calculation_categories.category1.length > 0 &&
        this.calculation_categories.category2.length > 0
      ) {
        discount = 0.15
      }
      if (
        this.calculation_categories.category1.length > 0 &&
        this.calculation_categories.category2.length > 0 &&
        this.calculation_categories.category3.length > 0
      ) {
        discount = 0.2
      }
      this.calculation_discount = discount
    },

    calculateTotal() {
      this.calculation_total =
        this.calculation_subtotal -
        this.calculation_subtotal * this.calculation_discount
    },
  },
  data() {
    return {
      calculation_categories: {
        category1: [],
        category2: [],
        category3: [],
      },
      calculation_subtotal: 0,
      calculation_discount: 0,
      calculation_total: 0,
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
          price: 80000,
          option_4k_price: 0,
          category: 'category1',
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
          price: 90000,
          option_4k_price: 0,
          category: 'category1',
        },
        szertartas_video: {
          id: 5,
          icon: 'mdi-video',
          title: 'Szertartás Videózás',
          calc_id: 'szertartas_video',
          type: 'number',
          min: 0,
          max: 2,
          vmodel: 'szertartas_video_4k',
          option_4k: true,
          price: 100000,
          option_4k_price: 35000,
          category: 'category2',
        },

        lakodalom_video: {
          id: 6,
          icon: 'mdi-video',
          title: 'Lakodalom Videózás',
          calc_id: 'lakodalom_video',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: 'lakodalom_video_4k',
          option_4k: true,
          price: 150000,
          option_4k_price: 30000,
          category: 'category2',
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
          price: 60000,
          option_4k_price: 0,
          category: 'category1',
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
          price: 50000,
          option_4k_price: 0,
          category: 'category1',
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
          price: 50000,
          option_4k_price: 0,
          category: 'category3',
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
          price: 200000,
          option_4k_price: 0,
          category: 'category2',
        },
        jegyes_video: {
          id: 9,
          icon: 'mdi-video',
          title: 'Eljegyzési Videó',
          calc_id: 'jegyes_video',
          type: 'boolean',
          min: 0,
          max: 2,
          vmodel: '',
          option_4k: false,
          price: 35000,
          option_4k_price: 0,
          category: 'category2',
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
          price: 20000,
          option_4k_price: 0,
          category: 'category3',
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
        jegyes_video: false,
        dron_video: false,
      },
      calculation_text: {
        items: [],
      },
    }
  },
}
</script>

<style lang="scss">
// $title-fontsize: max(1.25rem, 1.25vw);
$title-fontsize: max(0.8rem, 0.8dvw);
$icon-fontsize: max(1.75rem, 1.75dvw);
$result-fontsize: max(1.75rem, 1.75dvw);
$checkbox-fontsize: max(1.2rem, 1.2dvw);

.wedding-calculator {
  width: 80%;
  margin-inline: auto;
  margin-top: 5dvh;
  overflow: hidden;
  margin-bottom: 25dvh;

  @media (min-width: 45em) {
    position: absolute;
    left: 10dvw;
    width: 40%;
  }

  .v-card {
    border: 1px solid hsla(189, 64%, 23%, 0.365);
    padding-bottom: 1em;
    transition: 250ms;
    &:hover {
      border: 1px solid hsla(152, 81%, 34%, 0.565);
      background: hsla(189, 84%, 43%, 0.065);
      cursor: pointer;
    }
    &.selected {
      border: 1px solid hsla(152, 81%, 34%, 1) !important;
    }

    .title-icon {
      font-size: $icon-fontsize;
    }
    .item-title {
      font-size: $title-fontsize;
    }

    .checkbox4k {
      .v-input__slot {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      * {
        font-size: $checkbox-fontsize;
      }
      .v-label {
        font-size: 0.85em;
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
          scale: 1.15;
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
}

.wedding-results {
  $bgcolor1: hsl(189, 84%, 63%) 22%;
  $bgcolor2: hsl(202, 58%, 58%) 50%;
  $bgcolor3: hsl(201, 62%, 37%) 100%;
  $bgdeg: 152deg;
  position: fixed;
  width: 100dvw;
  height: 20dvh;
  bottom: 0px;
  @media (min-width: 45em) {
    width: 40dvw;
    min-height: 65dvh;
    top: 25vh;
    right: 5dvw;
  }

  background: linear-gradient($bgdeg, $bgcolor1, $bgcolor2, $bgcolor3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .null-button {
    border: 1px solid hsla(0, 0%, 0%, 0.5);
    padding: 1em 2em;
    border-radius: 0.5em;
    &:hover {
      border: 1px solid hsla(0, 0%, 0%, 1);
      cursor: pointer;
    }
  }

  .result-list {
    margin-left: 2em;
    .result-list__subitem {
      font-size: $title-fontsize;
      margin-bottom: 0.5em;
      color: black;
      border-bottom: 1px solid grey;
    }
  }
}
</style>
