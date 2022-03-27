import React, { Component } from 'react'
import Footer from './Footer';
import NewsItems from './NewsItems'
// import Spinner from './spinner';
// import InfiniteScroll from 'react-infinite-scroll-component';
import Carousel from './Carousel';
import Pagination from './Pagination';
//91da526b19a44a05bf694475448c0070
//f03e01d50c2e4ffabc8085e819003fcb

export class news extends Component {
     article = [{ "source": { "id": null, "name": "SciTechDaily" }, "author": null, "title": "NASA's Gigantic Crawler on the Move As Rollout of Mega Moon Rocket Inches Closer - SciTechDaily", "description": "Yesterday, engineers and technicians at NASA’s Kennedy Space Center in Florida drove Crawler Transporter-2, which will carry NASA’s Moon rocket to the launch pad, to the doors of the Vehicle Assembly Building (VAB). Soon, the 6.6-million-pound crawler will go…", "url": "https://scitechdaily.com/nasa-gigantic-crawler-on-the-move-as-rollout-of-mega-moon-rocket-inches-closer/", "urlToImage": "https://scitechdaily.com/images/NASA-Crawler-Transporter-2-Artemis-I.jpg", "publishedAt": "2022-03-12T16:39:41Z", "content": "Engineers and technicians at NASA’s Kennedy Space Center in Florida drove Crawler Transporter-2 on March 11, 2022 to the doors of the Vehicle Assembly Building (VAB). Soon, it will go inside the VAB … [+3594 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": "Greg Miller, Joseph Menn", "title": "Putin's pre-war moves against U.S. tech giants laid groundwork for crackdown on free expression - The Washington Post", "description": "Google and Apple blinked after threats from Russian agents.", "url": "https://www.washingtonpost.com/world/2022/03/12/russia-putin-google-apple-navalny/", "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DM2JL7VBOMI6ZFBYEVLQTNWN3Q.jpg&w=1440", "publishedAt": "2022-03-12T12:03:13Z", "content": "Within hours, an app designed to help Russians register protest votes against Putin could no longer be downloaded from Google or Apple, whose main representative in Moscow faced a similarly harrowing… [+16035 chars]" }, { "source": { "id": "cnn", "name": "CNN" }, "author": "Story by Reuters", "title": "India says it accidentally fired a missile into Pakistan - CNN", "description": "India said on Friday it had accidentally fired a missile into Pakistan this week because of a \"technical malfunction\" during routine maintenance, giving its version of events after Pakistan summoned India's envoy to protest.", "url": "https://www.cnn.com/2022/03/11/asia/india-pakistan-missile-intl-hnk/index.html", "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220311194255-india-pakistan-missile-03092022-handout-super-tease.jpg", "publishedAt": "2022-03-12T05:17:00Z", "content": "India said on Friday it had accidentally fired a missile into Pakistan this week because of a \"technical malfunction\" during routine maintenance, giving its version of events after Pakistan summoned … [+3687 chars]" }, { "source": { "id": "cnn", "name": "CNN" }, "author": "Jacob Krol", "title": "How to preorder the new iPhone SE - CNN", "description": "Apple’s third-generation iPhone SE is now officially up for preorder from Apple and authorized retailers. And while it retains the classic form factor with a home button, it also sports upgraded technology and an affordable $429 starting price.", "url": "https://www.cnn.com/2022/03/11/cnn-underscored/how-to-pre-order-iphone-se-2022/index.html", "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220309104608-underscored-apple-iphone-se-2022.jpg?q=h_1844,w_3278,x_0,y_0", "publishedAt": "2022-03-11T20:16:00Z", "content": "Apples third-generation iPhone SE is now officially up for preorder from Apple and authorized retailers. And while it retains the classic form factor with a home button, it also sports upgraded techn… [+2440 chars]" }]

   
    constructor() {
        super();
        this.state = {
            article: this.article,
            totalResults: 0,
            start:3,
            end:12

        }
    }


    Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async componentDidMount() {
        // let url="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=91da526b19a44a05bf694475448c0070&pageSize=12`;
        // let url=`https://api.currentsapi.services/v1/latest-news?&apiKey=3GNhCaYVjRDs7zPKoo0_Szf5ulZSvK6PRb_cjWU_1b384WS9`

        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;

        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ loading: false })
        this.setState({
            article: parseddata.articles,
            totalResults: parseddata.totalResults
        })
    }

    fetchMoreData = async () => {

        //    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=91da526b19a44a05bf694475448c0070&page=${this.state.page + 1}&pageSize=12`;
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
        // let url=`https://api.currentsapi.services/v1/latest-news?&apiKey=3GNhCaYVjRDs7zPKoo0_Szf5ulZSvK6PRb_cjWU_1b384WS9`

        // this.setState({
        //     page: this.state.page + 1
        // });
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            totalResults: parseddata.totalResults,
            article: parseddata.articles

        })}

        forward=()=>{
            window.scrollTo(0, 0)
            this.setState(
                { 
                    start:this.state.start+9,
                    end:this.state.end+9

                }
            )
        }

        backward=()=>{
            window.scrollTo(0, 0)
            this.setState(
                { 
                    start:this.state.start-9,
                    end:this.state.end-9

                }
            )
        }

    render() {
        return (<>
            <div className="container ">
            <h1 class="deepshd tstyle">{this.Capitalize(this.props.logo)}</h1>
                {/* <h1 className="text-center" ><em>{this.Capitalize(this.props.logo)}</em></h1> */}

                <Carousel fart={this.state.article[2]} sart={this.state.article[1]} tart={this.state.article[0]} />


                <div className="row my-1">
                    {this.state.article.slice(this.state.start, this.state.end).map((e) => {
                        return <div className="col-md-4 my-2 mb-2 d-flex align-items-stretch" key={e.title}>
                            <NewsItems title={e.title} description={e.description} imageurl={e.urlToImage} url={e.url}
                                author={e.author ? e.author : "Unknown"} />
                        </div>

                    })
                    }
                </div>

                <Pagination next={this.forward} prev={this.backward} len={this.state.totalResults} last={this.state.end} strt={this.state.start}/>
            </div>
            <Footer />


        </>
        )
    }
}

export default news