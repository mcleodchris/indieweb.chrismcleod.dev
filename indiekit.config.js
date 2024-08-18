import process from "node:process";
import CustomPreset from "preset/index.js";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  /**
   * Plug-ins
   *
   * In this example we have chosen to use a publication preset for Jekyll,
   * save posts and media files to a GitHub repository, and added a syndicator
   * to share posts on a Mastodon server.
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/store-github",
    CustomPreset
  ],

  /**
   * Publication options
   *
   * These values are used to configure application behaviour.
   *
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    me: process.env.PUBLICATION_URL,
  },

  /**
   * GitHub content store options
   *
   * Other content stores are available.
   *
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  }
};

export default config;