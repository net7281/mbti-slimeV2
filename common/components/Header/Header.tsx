import Head from "next/head";
import Script from "next/script";
const Header = () => {
  return (
    <>
      <Head>
        {/*카카오 설정*/}
        <meta name="title" property="og:title" content="mbti 슬라임 테스트" />
        <meta
          name="description"
          property="og:description"
          content="mbti 슬라임 테스트"
        />
        <meta
          name="image"
          property="og:image"
          content="/static/image/main/preview.png"
        />
        <meta
          name="url"
          property="og:url"
          content="https://mbti-slime.vercel.app/"
        />
        <meta property="og:locale" content="ko_KR" />
      </Head>

      <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
    </>
  );
};

export default Header;
