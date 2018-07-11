import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>24/7 Trust, Fully Managed.</h2>
                            </header>
                            <p>Companies around the world trust North Labs for the continuous management and optimization of their Amazon Web Services (AWS) infrastructure. Our team of certified AWS experts work across industries to experly migrate, manage and optimize cloud environments. Our customers are able to focus their efforts on business and product needs while we reduce their annual IT spend by up to 80%.</p>
                            <ul className="actions">
                                <li><a target="_" href="https://s3.amazonaws.com/northlabs-assets/North+Labs+One-Pager.pdf" className="button next scrolly">Download our One-Pager</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`