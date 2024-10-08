var posts=["posts/45574/","posts/91194a11/","posts/好/","posts/45ba41a4/","posts/214098eb/","posts/4824a410/","posts/2cbcc9fb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };