module.export = {
    async rewrites() {
        return [
            {
                source: "/:category",
                destination: "/category/show"
            }
        ]
    }
};
