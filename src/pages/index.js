import React from "react";
import { Link } from "gatsby";
import { Layout } from "~src/components/new/layout";
import style from "./index.module.scss";

const Box = ({ title, link, description }) => {
  return (
    <div className={style.link}>
      <div className={style.linkContent}>
        <div className={style.linkTitle}> {title}</div>
        <div className={style.linkDescription}> {description}</div>
        <Link to={link}>Skaityti</Link>
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout hideNavBar={true} noMargin={true}>
      <div className={style.intro}>
        <div className={style.introduction}>
          <div className={style.name}>Abipus</div>
          <div className={style.description}>
            Diskusijos apie socialinius dalykius, socialiems zmonems
          </div>
        </div>
        <div className={style.links}>
          <Box
            title="Podcastai"
            description="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
            link="/podcast"
          />
          <Box
            title="Blogas"
            description="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
            link="/blog"
          />
          <Box
            title="Apie"
            description="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
            link="/blog"
          />
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
