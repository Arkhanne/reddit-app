# reddit-app

This project is a tech challenge by a job application.

For this challenge you're going to create a basic React Native Reddit app, this
will give us an idea about your coding skills.
Reddit is a news website wherein registered users can submit posts or links to content that other users can vote and comment, the total number of votes determine the position of the post inside the website, each of these posts are grouped into categories known as “subreddits”.
Your app should list the last posts in the r/pics subreddit, to access this list use the following URL:
https://api.reddit.com/r/pics/new.json
For more information about the JSON structure see: https://github.com/reddit/ reddit/wiki/JSON

Requirements:
1. Use a FlatList to display a scrollable list of the last posts in the r/pics subreddit
2. Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation
3. Once the user taps on a post, open a WebView with the contents of the post URL
4. Ability to refresh the posts list  
