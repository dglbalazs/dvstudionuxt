<template>
  <div class="pricecalculator">
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.ceremonyPhotos -= 1
          }
        "
      >
        Lower
      </div>
      <div class="result">ceremonyPhotos: {{ options.ceremonyPhotos }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.ceremonyPhotos += 1
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.weddingPhoto = !this.options.weddingPhoto
          }
        "
      >
        Lower
      </div>
      <div class="result">weddingPhoto: {{ options.weddingPhoto }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.weddingPhoto = !this.options.weddingPhoto
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.creativePhoto = !this.options.creativePhoto
          }
        "
      >
        Lower
      </div>
      <div class="result">creativePhoto: {{ options.creativePhoto }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.creativePhoto = !this.options.creativePhoto
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.engagementPhoto = !this.options.engagementPhoto
          }
        "
      >
        Lower
      </div>
      <div class="result">engagementPhoto: {{ options.engagementPhoto }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.engagementPhoto = !this.options.engagementPhoto
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.ceremonyVideos -= 1
          }
        "
      >
        Lower
      </div>
      <div class="result">ceremonyVideos: {{ options.ceremonyVideos }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.ceremonyVideos += 1
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.ceremonyVideos4K = !this.options.ceremonyVideos4K
          }
        "
      >
        Lower
      </div>
      <div class="result">ceremonyVideos4K: {{ options.ceremonyVideos4K }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.ceremonyVideos4K = !this.options.ceremonyVideos4K
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.weddingVideo = !this.options.weddingVideo
          }
        "
      >
        Lower
      </div>
      <div class="result">weddingVideo: {{ options.weddingVideo }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.weddingVideo = !this.options.weddingVideo
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.weddingVideo4K = !this.options.weddingVideo4K
          }
        "
      >
        Lower
      </div>
      <div class="result">weddingVideo4K: {{ options.weddingVideo4K }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.weddingVideo4K = !this.options.weddingVideo4K
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.highlightsVideo = !this.options.highlightsVideo
          }
        "
      >
        Lower
      </div>
      <div class="result">highlightsVideo: {{ options.highlightsVideo }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.highlightsVideo = !this.options.highlightsVideo
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        class="minus"
        @click="
          () => {
            this.options.droneVideo = !this.options.droneVideo
          }
        "
      >
        Lower
      </div>
      <div class="result">droneVideo: {{ options.droneVideo }}</div>
      <div
        class="plus"
        @click="
          () => {
            this.options.droneVideo = !this.options.droneVideo
          }
        "
      >
        Higher
      </div>
    </div>
    <div>
      <div
        @click="
          () => {
            this.price = this.calculatePrice(this.options)
          }
        "
      >
        Calculate
      </div>
      <div class="result">price: {{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        ceremonyPhotos: 2,
        weddingPhoto: true,
        creativePhoto: true,
        engagementPhoto: true,
        ceremonyVideos: 2,
        ceremonyVideos4K: true,
        weddingVideo: true,
        weddingVideo4K: true,
        highlightsVideo: true,
        droneVideo: true,
      },
      price: 0,
    }
  },
  methods: {
    calculatePrice(options) {
      let totalPrice = 0
      const selectedOptions = []

      if (options.ceremonyPhotos === 1) {
        selectedOptions.push('1ceremonyPhotos')
      } else if (options.ceremonyPhotos === 2) {
        selectedOptions.push('2ceremonyPhotos')
      }
      if (options.weddingPhoto) {
        selectedOptions.push('weddingPhoto')
      }
      if (options.creativePhoto) {
        selectedOptions.push('creativePhoto')
      }
      if (options.engagementPhoto) {
        selectedOptions.push('engagementPhoto')
      }
      if (options.ceremonyVideos === 1) {
        selectedOptions.push(
          options.ceremonyVideos4K ? '1ceremonyVideos4K' : '1ceremonyVideos'
        )
      } else if (options.ceremonyVideos === 2) {
        selectedOptions.push(
          options.ceremonyVideos4K ? '2ceremonyVideos4K' : '2ceremonyVideos'
        )
      }
      if (options.weddingVideo) {
        selectedOptions.push(
          options.weddingVideo4K ? 'weddingVideo4K' : 'weddingVideo'
        )
      }

      if (options.highlightsVideo) {
        selectedOptions.push('highlightsVideo')
      }
      if (options.cinematographyVideo) {
        selectedOptions.push('cinematographyVideo')
      }
      if (options.creativeVideo) {
        selectedOptions.push('creativeVideo')
      }
      if (options.droneVideo) {
        selectedOptions.push('droneVideo')
      }

      console.log(selectedOptions)
      // Check for bundle discounts
      const bundles = [
        {
          items: ['1ceremonyPhotos', 'weddingPhoto'],
          price: 155000,
        },
        {
          items: ['2ceremonyPhotos', 'weddingPhoto'],
          price: 200000,
        },
        {
          items: ['1ceremonyPhotos', 'weddingPhoto', 'creativePhoto'],
          price: 210000,
        },
        {
          items: ['2ceremonyPhotos', 'weddingPhoto', 'creativePhoto'],
          price: 250000,
        },
        {
          items: [
            '2ceremonyPhotos',
            'weddingPhoto',
            'creativePhoto',
            'engagementPhoto',
          ],
          price: 300000,
        },
        {
          items: ['1ceremonyVideos', 'weddingVideo'],
          price: 220000,
        },
        {
          items: ['2ceremonyVideos', 'weddingVideo'],
          price: 290000,
        },
        {
          items: ['1ceremonyVideos4K', 'weddingVideo4K'],
          price: 300000,
        },
        {
          items: ['2ceremonyVideos4K', 'weddingVideo4K'],
          price: 350000,
        },
        {
          items: [
            '1ceremonyPhotos',
            'weddingPhoto',

            '1ceremonyVideos',
            'weddingVideo',
          ],
          price: 350000,
        },
        {
          items: [
            '1ceremonyPhotos',
            'weddingPhoto',

            '1ceremonyVideos4K',
            'weddingVideo4K',
          ],
          price: 402500,
        },
        {
          items: [
            '1ceremonyPhotos',
            'weddingPhoto',
            'creativePhoto',

            '1ceremonyVideos',
            'weddingVideo',
            'highlightsVideo',
            'droneVideo',
          ],
          price: 350000,
        },
        {
          items: [
            '1ceremonyPhotos',
            'weddingPhoto',
            'creativePhoto',

            '1ceremonyVideos4K',
            'weddingVideo4K',
            'highlightsVideo',
            'droneVideo',
          ],
          price: 511750,
        },
        {
          items: [
            '2ceremonyPhotos',
            'weddingPhoto',

            '2ceremonyVideos',
            'weddingVideo',
          ],
          price: 410000,
        },
        {
          items: [
            '2ceremonyPhotos',
            'weddingPhoto',

            '2ceremonyVideos4K',
            'weddingVideo4K',
          ],
          price: 471500,
        },
        {
          items: [
            '2ceremonyPhotos',
            'weddingPhoto',
            'creativePhoto',

            '2ceremonyVideos',
            'weddingVideo',
            'highlightsVideo',
            'droneVideo',
          ],
          price: 510000,
        },
        {
          items: [
            '2ceremonyPhotos',
            'weddingPhoto',
            'creativePhoto',

            '2ceremonyVideos4K',
            'weddingVideo4K',
            'highlightsVideo',
            'droneVideo',
          ],
          price: 586500,
        },
        //-------------
      ]

      bundles.sort((a, b) => b.price - a.price)

      for (const bundle of bundles) {
        console.log(bundle)
        let containsAllItems = true
        for (const item of bundle.items) {
          if (!selectedOptions.includes(item)) {
            containsAllItems = false
            break
          }
        }
        if (containsAllItems) {
          console.log(`bundle found`)
          console.log(bundle)
          totalPrice += bundle.price
          for (const item of bundle.items) {
            console.log(selectedOptions, item)
            const index = selectedOptions.indexOf(item)
            selectedOptions.splice(index, 1)
          }
        }
      }

      console.log(totalPrice, selectedOptions)
      // Add the base price for each remaining standalone option
      for (const option of selectedOptions) {
        if (option === 'ceremonyPhotos') {
          totalPrice += 60000
        } else if (option === 'weddingPhoto') {
          totalPrice += 130000
        } else if (option === 'creativePhoto') {
          totalPrice += 60000
        } else if (option === 'engagementPhoto') {
          totalPrice += 50000
        } else if (option === 'ceremonyVideos') {
          totalPrice += 100000
        } else if (option === 'ceremonyVideos4K') {
          totalPrice += 135000
        } else if (option === 'weddingVideo') {
          totalPrice += 150000
        } else if (option === 'weddingVideo4K') {
          totalPrice += 180000
        } else if (option === 'highlightsVideo') {
          totalPrice += 20000
        } else if (option === 'cinematographyVideo') {
          totalPrice += 100000
        } else if (option === 'creativeVideo') {
          totalPrice += 60000
        } else if (option === 'droneVideo') {
          totalPrice += 20000
        }
      }

      return totalPrice
    },
  },
}
</script>

<style scoped>
.pricecalculator {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
div {
  padding: 10px;
  font-size: 20px;
  color: white;
  margin: 10px;
}

.result {
  font-weight: 800;
  font-size: 30px;
}
</style>
