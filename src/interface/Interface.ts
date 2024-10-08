export interface Slide {
  image: string;
  title: string;
  url?: string;
  id: string;
}

interface Source {
    url: string;
    isM3U8: boolean;
    quality: string;
  }
  
  export interface EpisodeDetail {
    headers: {
      Referer: string;
    };
    sources: Source[];
    download: string;
  }
  
export interface AniDetails {
    title: string;
    image: string;
    description: string;
    totalEpisodes: number;
    genres: string[];
    episodes: Episode[];
  }
  
 export interface Episode {
    id: string;
    number: number;
  }
  
export interface HomeBannerProps {
  slides: Slide[];
}

export interface IntroProps {
  onFinish: () => void;
}

export interface AllApiComponentProps {
  url: string;
  limit: number;
  setData: (data: any[]) => void;
  setLoading: (loading: boolean) => void;
}
