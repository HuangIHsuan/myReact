import "./App.css"

function PointContent() {
  const article = {
    a1: {
      title: "教學影音",
      content: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
    },
    a2: {
      title: "良性互動",
      content: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
    },
    a3: {
      title: "趨勢分享",
      content: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
    },
  }

  return (
    <>
      <article>
        <h2>{article.a1.title}</h2>
        <p>{article.a1.content}</p>
      </article>
      <article>
        <h2>{article.a2.title}</h2>
        <p>{article.a2.content}</p>
      </article>
      <article>
        <h2>{article.a3.title}</h2>
        <p>{article.a3.content}</p>
      </article>
    </>
  )
}

function Recommand() {
  const lecture = {
    l1: {
      img: "../images/unity.jpg",
      name: "Unity 5",
      content: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
      teacher: "Susan",
      time: 4,
      originPrice: "NT1600",
      discountPrice: "NT900",
    },
    l2: {
      img: "../images/gamesalad.jpg",
      name: "GameSalad 2D遊戲製作",
      content: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
      teacher: "David",
      time: 8,
      originPrice: "NT3200",
      discountPrice: "NT1600",
    },
    l3: {
      img: "../images/gwd.jpg",
      name: "Google Web Design",
      content: "用於建立HTML5廣告動畫，透過時間軸，將各種物件和事件以動畫方式呈現",
      teacher: "Laurance",
      time: 8,
      originPrice: "NT2800",
      discountPrice: "NT1500",
    },
  }
  return (
    <>
      <article>
        <figure><img src={lecture.l1.img} alt="" /></figure>
        <h3>{lecture.l1.name}</h3>
        <p className="content">{lecture.l1.content}</p>
        <p className="teacher">{`講師：${lecture.l1.teacher}`}</p>
        <p className="time">{`影音課程時數：${lecture.l1.time} 小時`}</p>
        <p className="price"><span>{`原價 ${lecture.l1.originPrice}`}</span>{lecture.l1.discountPrice}</p>
        <p className="paybtn">付款上課去</p>
      </article>
      <article>
        <figure><img src={lecture.l2.img} alt="" /></figure>
        <h3>{lecture.l2.name}</h3>
        <p className="content">{lecture.l2.content}</p>
        <p className="teacher">{`講師：${lecture.l2.teacher}`}</p>
        <p className="time">{`影音課程時數：${lecture.l2.time} 小時`}</p>
        <p className="price"><span>{`原價 ${lecture.l2.originPrice}`}</span>{lecture.l2.discountPrice}</p>
        <p className="paybtn">付款上課去</p>
      </article>
      <article>
        <figure><img src={lecture.l3.img} alt="" /></figure>
        <h3>{lecture.l3.name}</h3>
        <p className="content">{lecture.l3.content}</p>
        <p className="teacher">{`講師：${lecture.l3.teacher}`}</p>
        <p className="time">{`影音課程時數：${lecture.l3.time} 小時`}</p>
        <p className="price"><span>{`原價 ${lecture.l3.originPrice}`}</span>{lecture.l3.discountPrice}</p>
        <p className="paybtn">付款上課去</p>
      </article>

    </>
  )
}

function App() {

  return (
    <>
      <div id="wrap">
        <header>
          <figure><img src="../images/banner.jpg" alt="" /></figure>
        </header>

        <main>
          <div id="point">
            <PointContent />
          </div>

          <div id="slogan">
            <p>讓學習成為一種習慣</p>
          </div>

          <div id="lecture">
            <h1 id="topic">推薦課程</h1>
            <div id="contentClass"><Recommand /></div>
          </div>
        </main>

        <footer>
          <small>&copy; 2024.11.12 黃逸軒</small>
        </footer>
      </div>

    </>
  )
}


export default App
