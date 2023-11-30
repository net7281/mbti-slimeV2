declare global {
  interface Window {
    Kakao: any;
  }
  const kakao: any;
}

export const shareKakao = (
  mbti: string,
  imgUrl: string,
  desc: string,
  titleName: string,
) => {
  if (typeof window != "undefined" && window.Kakao) {
    const kakao = window.Kakao;
    const url = window.location.protocol + "//" + window.location.host;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    console.log(`${desc} ${mbti}, ${titleName}입니다.`);

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "mbti 슬라임 검사결과 👉",
        description: `${desc} ${mbti},${titleName}입니다.`,
        imageUrl: url + imgUrl,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      itemContent: {
        profileText: "mbti 슬라임 테스트",
        profileImageUrl: url + imgUrl,
        titleImageUrl: url + imgUrl,
      },
      buttons: [
        {
          title: "테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
};
