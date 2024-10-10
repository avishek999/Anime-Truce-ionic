declare module 'swiper/react' {
    export const Swiper: any;
    export const SwiperSlide: any;
    // Add other exports you may need or any types as necessary
  }

  declare module 'swiper/modules' {
    export const Autoplay:any;
    export const Pagination:any;
  }

  declare module '@capacitor/preferences' {
    export const Preferences: any; // Or define more specific types if known.
  }