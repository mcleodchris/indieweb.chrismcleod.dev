import { getPostTemplate } from "./lib/post-template.js";

export default class CustomPreset {
  constructor() {
    this.name = "chrismcleod.dev preset";
  }

  get info() {
    return {
      name: "chrismcleod.dev",
    };
  }
  get postTypes() {
    return {
      note: {
        name: "Note",
        postStatus: "published",
        visibility: "public",
        post: {
          path: "src/notes/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "notes/{yyyy}{MM}{DD}{HH}{mm}/",
        },
        fields: {
          image: {},
          imageAlt: {},
        },
      },
      like: {
        name: "Like",
        postStatus: "published",
        visibility: "public",
        post: {
          path: "src/likes/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "likes/{yyyy}{MM}{dd}{HH}{mm}/",
        },
      },
      article: {
        name: "Blog Post",
        postStatus: "published",
        visibility: "public",
        post: {
          path: "src/posts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "blog/{slug}/",
        },
      },
      bookmark: {
        name: "Bookmark",
        postStatus: "published",
        visibility: "public",
        post: {
          path: "src/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "bookmarks/{slug}/",
        },
      },
    };
  }

  postTemplate(properties) {
    return getPostTemplate(properties);
  }

  init(Indiekit) {
    const { publication } = Indiekit.config;

    Indiekit.addPreset(this);
  }
}
