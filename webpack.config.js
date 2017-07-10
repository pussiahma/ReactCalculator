module.exports =  {

entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  
  module: {
    loaders: [
	  {
	    loader: 'babel-loader',
		exclude: /node-modules/,
		test: /\.js$/,
	  },

	  {
		loader: "style-loader!css-loader",
		test: /\.css$/,
	  }
	]
  }
};
