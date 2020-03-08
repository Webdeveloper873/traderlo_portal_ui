import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';

//styles
import classes from './styles.module.scss';

//resources
import ImageHolder from 'assets/main.jpg';

const BlogDetails = ({blog}) => {
  return(
    <div className={classes.blogDetails}>
      <a href={'/'}>{`by ${blog.slug}`}</a>
      <h6>{blog.title}</h6>
      <span>{blog.createdDate}</span>
      <p>Consectetur adipisicing elite aeiuim setiusm tempor incididunt labore etnalom...</p>
    </div>
  );
}

const CardItem = ({blog}) => {
  return (
    <Col xs={12} lg={4}>
      <Card>
        <Card.Img variant="top" src={ImageHolder} />
        <BlogDetails blog={blog}/>
      </Card>
    </Col>
  )
}

const BlogCards = ({ featBlogs }) => {
  console.log('featBlogs', featBlogs)
  return(
      <PageWrapper center>
        <div className={`${classes.fullWidth} ${classes.contentRow}`}>
          <h1>Blog</h1>
          <span className={classes.subTitle}>Consectetur adipisicing eliteiuim set eiusmod tempor incididunt labore etnalom dolore magna aliqua udiminimate veniam quistan norud.</span>
        </div>
        <Row className={classes.contentRow} gutter={24}>
          {featBlogs && featBlogs.map(blog => <CardItem blog={blog} />)}
          {/* <CardItem />
          <CardItem />
          <CardItem /> */}
        </Row>
      </PageWrapper>
  );
}

export default BlogCards;