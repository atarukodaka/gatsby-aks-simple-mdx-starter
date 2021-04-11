module.exports = {
	plugins: [
	]
}



module.exports = {

	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: 'content/posts'
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: ['.md', '.mdx']
			}
		}
	]
}