import React from "react";
import { Card } from 'primereact/card';
import { NewsData } from "../../config/interfaces";
import { Link } from "react-router-dom";

import './style.scss';

function NewsCard(props: NewsData) {
  const cardHeader = (imageURI: string) => <Link to={`/news/${props.id}`} state={props}><img alt="Card" src={imageURI} /></Link>;
  
  return (
    <Card
      title={props.title}
      subTitle={props.subtitle}
      header={() => cardHeader(props.imageURI)}
      className="md:w-25rem">
      <p className="m-0">{props.content}</p>  
    </Card>
  );
}

export default NewsCard;