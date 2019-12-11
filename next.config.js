module.export = {
    experimental: {
         async rewrites() {
             return [
                 {
                     source: "/about-me",
                     destination: "/pages/about"
                 },
                 {
                     source: "/:category/:slug",
                     destination: "/category/blog"
                 },
                 {
                     source: "/:category",
                     destination: "/category"
                 },

             ]
         },
    }
};
