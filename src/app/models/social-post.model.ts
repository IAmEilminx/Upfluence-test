export class SocialPost {
  id: string;
  timestamp: number;
}

export class FacebookStatus extends SocialPost {
  comments: number;
  likes: number;
  post_id: string;
  shares: number;
  text: string;
  timestamp: number;

  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}

export class Tweet extends SocialPost {
  content: string;
  favorites: number;
  post_id: string;
  retweets: number;
  timestamp: number;

  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}

export class Pin extends SocialPost {
  comments: number;
  description: string;
  likes: number;
  links: string;
  post_id: string;
  repins: number;
  saves: number;
  timestamp: number;
  title: string;
  
  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}

export class Article extends SocialPost {
  content: string;
  description: string;
  timestamp: number;
  title: string;
  url: string;

  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}

export class InstagramMedia extends SocialPost {
  comments: number;
  likes: number;
  link: string;
  location_name: string;
  post_id: string;
  text: string;
  timestamp: number;
  type: string | 'picture';
  views: number;

  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}

export class YoutubeVideo extends SocialPost {
  comments: number;
  description: string;
  dislikes: number;
  likes: number;
  link: string;
  name: string;
  post_id: string;
  timestamp: number;
  views: number;

  constructor(obj) {
    super()
    Object.assign(this, obj);
  }
}
