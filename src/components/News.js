import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: 'Pope Francis says world suffering a "famine of peace" - BBC',
      description:
        'In his Christmas Day message, the pontiff also called for an "immediate end" to the war in Ukraine.',
      url: "https://www.bbc.com/news/world-europe-64089428",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/14EDA/production/_128122758_popertr73766e0532b90a8fa176ce2e8fd70ac95315a46a.jpg",
      publishedAt: "2022-12-25T12:27:03Z",
      content:
        'Pope Francis has said the world is suffering from a "famine of peace", in his annual Christmas Day message from the Vatican.\r\nHe called for a end to the "senseless war" in Ukraine, condemning what he… [+1657 chars]',
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Putin says Russia ready to negotiate over Ukraine - Reuters",
      description:
        "Russia is ready to negotiate with all parties involved in the war in Ukraine but Kyiv and its Western backers have refused to engage in talks, President Vladimir Putin said in an interview aired on Sunday.",
      url: "https://www.reuters.com/world/europe/putin-says-russia-ready-negotiate-over-ukraine-2022-12-25/",
      urlToImage:
        "https://www.reuters.com/resizer/IbDddQPzPxq6-V2hDN3vAzLb1RI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NP2WVNRXFRL7NEDY3K2KP6LNWM.jpg",
      publishedAt: "2022-12-25T11:04:00Z",
      content:
        "MOSCOW, Dec 25 (Reuters) - Russia is ready to negotiate with all parties involved in the war in Ukraine but Kyiv and its Western backers have refused to engage in talks, President Vladimir Putin said… [+3252 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Covid Surge In China A Global Concern | Covid News Today | China Corona News Today | English News - CNN-News18",
      description:
        "Covid Surge In China A Global Concern | Covid News Today | China Corona News Today | English NewsChina Covid: As many as 248 million people, or nearly 18% of...",
      url: "https://www.youtube.com/watch?v=UKrUo78Lc18",
      urlToImage: "https://i.ytimg.com/vi/UKrUo78Lc18/maxresdefault_live.jpg",
      publishedAt: "2022-12-25T08:54:16Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ehsan Popalzai, Sahar Akbarzai, Mohammed Tawfeeq",
      title:
        "Taliban orders NGOs to ban female employees from coming to work - CNN",
      description:
        "The Taliban administration in Afghanistan has ordered all local and international non-governmental organizations (NGOs) to stop their female employees from coming to work, according to a letter by the Ministry of Economy sent to all licensed NGOs.",
      url: "https://www.cnn.com/2022/12/24/asia/taliban-female-employees-ngos-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221224110236-01-afghan-women-072922-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-25T07:43:00Z",
      content:
        "The Taliban administration in Afghanistan has ordered all local and international non-governmental organizations (NGOs) to stop their female employees from coming to work, according to a letter by th… [+4014 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "NFL round-up: Backup QB Minshew comes up short for Eagles in loss to Cowboys - The Guardian",
      description:
        "Dak Prescott threw for 347 yards and three touchdowns to lift the Dallas Cowboys over the Philadelphia Eagles 40-34 on Saturday",
      url: "https://www.theguardian.com/sport/2022/dec/25/nfl-round-up-week-16-saturday-gamres",
      urlToImage:
        "https://i.guim.co.uk/img/media/ced7fb2d176910d32a253114243b1d7b621829f2/0_57_4288_2573/master/4288.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=93425b91d2c734db5692b27b9f75ceb1",
      publishedAt: "2022-12-25T06:25:00Z",
      content:
        "Dak Prescott threw for 347 yards and three touchdowns, Brett Maher kicked the go-ahead field goal late and the Dallas Cowboys beat the Philadelphia Eagles 40-34 on Saturday.\r\nGardner Minshew threw tw… [+12388 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
    };
  }

  async componentDidMount()
  {
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d776ab36c7f641a08f6f48bb28ae2c1a"
    let data = await fetch(url)
    console.log(data)
    let parsed = await data.json()
    console.log(parsed)
    this.setState({article: parsed.articles})

  }

  render() {
    console.log("render")
    return (
      <div>
        <div className="row">
          {this.state.article.map((element) => {
            return (<div className="col-lg-4 col-md-6 col-sm-12 my-2" key={element.url}>
              <NewsItem title={element.title? element.title.slice(0,50)+"..." :  "" } desc={element.description? element.description.slice(0,80)+"..." :  ""} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>);
          })}
   
        </div>
      </div>
    );
  }
}

export default News;
