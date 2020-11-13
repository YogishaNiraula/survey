Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <a href="https://woodland-landing.vercel.app/"><button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button></a>
    </div>
    `
});
Vue.component("star", {
    props: ["starid", "fill"],
    template: `
          <svg
            @click="$emit('starselect', starid)"
            class="w-8 h-8"
            :class="{'fill-none': !fill, 'fill-red': fill}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
  `,
});

// stars
Vue.component("stars", {
    template: `
        <div 
            @click="$emit('rated', rating)"
            class="m-2 text-2xl text-center cursor-pointer select-none"
        >
            <div class="flex flex-wrap">
              <star @starselect="updateRating" v-for="starid in totalStars" :key="starid" :starid="starid" :fill="starid <= rating"></star>
            </div>
        </div>
    `,

    props: ["total", "defaultrating"],

    methods: {
        updateRating: function (starid) {
            this.rating = starid;
        },
    },

    data: function () {
        let totalStars = [];
        for (let i = 0; i < this.total; i++) totalStars.push(i + 1);

        // totalStars = [1,2,3,4,5];
        return {
            rating: this.defaultrating ?? 1,
            totalStars,
        };
    },
});