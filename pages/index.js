import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, My name is Ahsan. I am a Software Engineer graduated from COMSATS
          University Lahore. I work at Senary Bits as a MERN Stack developer and
          now learning Next.JS
        </p>
      </section>
    </Layout>
  );
}
