import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getPosts } from "../redux/posts/actions";
//
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    (async () => {
      await getPosts();
    })();
  }, []);

  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" sx={{ marginTop: "4rem" }}>
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => {
            return (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={post.id} xs={12} md={4}>
                <Card>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    component="img"
                    sx={{ maxHeight: "200px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {post.title.substr(0, 50)}...
                    </Typography>
                    <div>
                      <Typography
                        component="p"
                        color="textPrimary"
                      ></Typography>
                      <Typography variant="p" color="textSecondary">
                        {post.excerpt.substr(0, 60)}...
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

// Redux config
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
