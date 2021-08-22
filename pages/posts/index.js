import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>All Posts</title>
      </Head>
      <h1>Posts List</h1>
    </Layout>
  );
}
